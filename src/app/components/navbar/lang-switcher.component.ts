import {
  Component, inject, signal, computed,
  HostListener, ElementRef, OnDestroy,
} from '@angular/core';
import { I18nService, Lang } from '../../services/i18n.service';

interface LangOption {
  code: Lang;
  label: string;   // full name for aria & display
  short: string;   // 2-char display code
}

const LANGS: LangOption[] = [
  { code: 'es', label: 'Español',  short: 'ES' },
  { code: 'eu', label: 'Euskera',  short: 'EU' },
  { code: 'en', label: 'English',  short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
];

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  template: `
    <!-- Trigger button — ARIA listbox pattern (APG) -->
    <div class="ls" #switcher>
      <button
        class="ls__trigger"
        type="button"
        [attr.aria-haspopup]="'listbox'"
        [attr.aria-expanded]="isOpen()"
        [attr.aria-label]="ariaLabel()"
        [attr.aria-controls]="'ls-listbox'"
        (click)="toggle()"
        (keydown)="onTriggerKey($event)"
      >
        <!-- Globe icon -->
        <svg class="ls__globe" viewBox="0 0 20 20" fill="none"
             stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="10" cy="10" r="8"/>
          <path d="M10 2c-2.5 3-2.5 13 0 16M10 2c2.5 3 2.5 13 0 16M2 10h16"/>
          <path d="M3.5 6.5h13M3.5 13.5h13" stroke-linecap="round"/>
        </svg>
        <span class="ls__code">{{ currentShort() }}</span>
        <svg class="ls__chevron" [class.ls__chevron--open]="isOpen()"
             viewBox="0 0 10 6" fill="none" stroke="currentColor"
             stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
          <path d="M1 1l4 4 4-4"/>
        </svg>
      </button>

      <!-- Dropdown listbox -->
      @if (isOpen()) {
        <ul
          id="ls-listbox"
          class="ls__dropdown"
          role="listbox"
          [attr.aria-label]="'Seleccionar idioma / Choose language'"
          [attr.aria-activedescendant]="'ls-opt-' + i18n.currentLang()"
          (keydown)="onListKey($event)"
          tabindex="-1"
          #listbox
        >
          @for (lang of langs; track lang.code; let i = $index) {
            <li
              [id]="'ls-opt-' + lang.code"
              role="option"
              [attr.aria-selected]="i18n.currentLang() === lang.code"
              class="ls__option"
              [class.ls__option--active]="i18n.currentLang() === lang.code"
              [class.ls__option--focused]="focusedIdx() === i"
              (click)="select(lang.code)"
              (mouseenter)="focusedIdx.set(i)"
            >
              <span class="ls__opt-code" aria-hidden="true">{{ lang.short }}</span>
              <span class="ls__opt-label">{{ lang.label }}</span>
              @if (i18n.currentLang() === lang.code) {
                <svg class="ls__opt-check" viewBox="0 0 12 9" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round" aria-hidden="true">
                  <path d="M1 4.5L4.5 8 11 1"/>
                </svg>
              }
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrls: ['./lang-switcher.component.css'],
})
export class LangSwitcherComponent implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  private readonly elRef = inject(ElementRef);

  langs = LANGS;
  isOpen = signal(false);
  focusedIdx = signal(0);

  currentShort = computed(() =>
    LANGS.find(l => l.code === this.i18n.currentLang())?.short ?? 'ES'
  );

  ariaLabel = computed(() => {
    const current = LANGS.find(l => l.code === this.i18n.currentLang())?.label ?? '';
    return `Idioma actual: ${current}. Cambiar idioma`;
  });

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      const idx = LANGS.findIndex(l => l.code === this.i18n.currentLang());
      this.focusedIdx.set(idx >= 0 ? idx : 0);
      this.isOpen.set(true);
      // Focus the listbox after render
      setTimeout(() => {
        const lb = this.elRef.nativeElement.querySelector('#ls-listbox') as HTMLElement;
        lb?.focus();
      }, 0);
    }
  }

  close(): void {
    this.isOpen.set(false);
    // Return focus to trigger
    const trigger = this.elRef.nativeElement.querySelector('.ls__trigger') as HTMLElement;
    trigger?.focus();
  }

  select(code: Lang): void {
    this.i18n.setLang(code);
    this.close();
  }

  onTriggerKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!this.isOpen()) {
        const idx = LANGS.findIndex(l => l.code === this.i18n.currentLang());
        this.focusedIdx.set(idx >= 0 ? idx : 0);
        this.isOpen.set(true);
        setTimeout(() => {
          (this.elRef.nativeElement.querySelector('#ls-listbox') as HTMLElement)?.focus();
        }, 0);
      }
    }
  }

  onListKey(e: KeyboardEvent): void {
    const len = LANGS.length;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.focusedIdx.set((this.focusedIdx() + 1) % len);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.focusedIdx.set((this.focusedIdx() - 1 + len) % len);
        break;
      case 'Home':
        e.preventDefault();
        this.focusedIdx.set(0);
        break;
      case 'End':
        e.preventDefault();
        this.focusedIdx.set(len - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.select(LANGS[this.focusedIdx()].code);
        break;
      case 'Escape':
      case 'Tab':
        this.close();
        break;
    }
  }

  // Close when clicking outside
  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(e.target)) {
      this.isOpen.set(false);
    }
  }

  ngOnDestroy(): void { this.isOpen.set(false); }
}
