import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup,
  Validators, AbstractControl, ValidationErrors,
} from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  status = signal<FormStatus>('idle');
  errorMessage = '';

  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  todayISO = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.init();
    this.form = this.fb.group(
      {
        nombre:        ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80), this.noScriptValidator]],
        email:         ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
        telefono:      ['', [Validators.pattern(/^\+?[\d\s\-().]{7,20}$/)]],
        personas:      ['', Validators.required],
        fecha_llegada: ['', [Validators.required, this.futureDateValidator]],
        fecha_salida:  ['', Validators.required],
        mensaje:       ['', [Validators.maxLength(800), this.noScriptValidator]],
        privacidad:    [false, Validators.requiredTrue],
        hpot:          [''],
      },
      { validators: this.checkoutAfterCheckinValidator }
    );
    this.form.get('fecha_llegada')?.valueChanges.subscribe(() => {
      this.form.get('fecha_salida')?.updateValueAndValidity();
    });
  }

  private noScriptValidator(ctrl: AbstractControl): ValidationErrors | null {
    const val: string = ctrl.value ?? '';
    return /<[^>]*script|javascript:/i.test(val) ? { noScript: true } : null;
  }

  private futureDateValidator(ctrl: AbstractControl): ValidationErrors | null {
    if (!ctrl.value) return null;
    const selected = new Date(ctrl.value);
    const today = new Date(); today.setHours(0,0,0,0);
    return selected < today ? { pastDate: true } : null;
  }

  private checkoutAfterCheckinValidator(group: AbstractControl): ValidationErrors | null {
    const checkin  = group.get('fecha_llegada')?.value;
    const checkout = group.get('fecha_salida')?.value;
    if (checkin && checkout && checkout <= checkin) {
      group.get('fecha_salida')?.setErrors({ checkoutBeforeCheckin: true });
      return { checkoutBeforeCheckin: true };
    }
    return null;
  }

  get checkoutMin(): string { return this.form.get('fecha_llegada')?.value || this.todayISO; }
  isInvalid(f: string): boolean { const c = this.form.get(f); return !!(c?.invalid && (c.dirty || c.touched)); }

  getError(field: string): string {
    const ctrl = this.form.get(field);
    if (!ctrl?.errors) return '';
    const e = ctrl.errors;
    const err = this.t().contact.errors;
    if (e['required'])              return err.required;
    if (e['requiredTrue'])          return err.requiredTrue;
    if (e['email'])                 return err.email;
    if (e['minlength'])             return err.minLength.replace('{n}', String((e['minlength'] as {requiredLength:number}).requiredLength));
    if (e['maxlength'])             return err.maxLength.replace('{n}', String((e['maxlength'] as {requiredLength:number}).requiredLength));
    if (e['pattern'])               return err.pattern;
    if (e['pastDate'])              return err.pastDate;
    if (e['checkoutBeforeCheckin']) return err.checkoutBeforeCheckin;
    if (e['noScript'])              return err.noScript;
    return err.invalid;
  }

  get charCount(): number { return this.form.get('mensaje')?.value?.length ?? 0; }
  get charCountText(): string { return this.t().contact.charCount.replace('{n}', String(this.charCount)); }

  async onSubmit(): Promise<void> {
    if (this.form.get('hpot')?.value) return;
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('loading');
    const v = this.form.value;
    try {
      await this.emailService.validateAndSend({
        nombre: v.nombre, email: v.email, telefono: v.telefono,
        personas: v.personas, fecha_llegada: v.fecha_llegada,
        fecha_salida: v.fecha_salida, mensaje: v.mensaje,
      });
      this.status.set('success');
      this.form.reset();
    } catch (err) {
      this.status.set('error');
      this.errorMessage = this.t().contact.errorMsg;
      console.error(err);
    }
  }

  resetForm(): void { this.form.reset(); this.status.set('idle'); this.errorMessage = ''; }
}
