import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { ageValidator } from './ageValidator';


export class FormValidators {
  private static isNotPresent(control: AbstractControl): boolean {
    const value = control.value;
    if (value === undefined || value === null) {
      return true;
    }
    return value !== '' ? false : true;
  }

  static EmailValidator(control: AbstractControl): ValidationErrors {
    if (FormValidators.isNotPresent(control)) {
      return undefined;
    }
    if (control.value) {
      return /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(control.value)
        ? null
        : { invalidEmail: true };
    }
  }

  static NumeroDocumentoValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^\d{6,10}$/.test(control.value)
        ? null
        : { DOCUMENTO_INVALIDO: true };
    }
  }

  static IdValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^\d{6,10}$/.test(control.value) ? null : { invalidId: true };
    }
  }

  static minimunCharactersValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return control.value.length > 2 ? null : { MIN: true };
    }
  }

  static OnlyLettersValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/.test(
        control.value
      )
        ? null
        : { onlyLetters: true };
    }
  }

  static OnlyNumbersValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^\d+$/.test(control.value) ? null : { onlynumbers: true };
    }
  }

  static NumberPhoneValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^(?:3(?:0[0-9]|1[0-9]|2[0-9]|5[0-1]))?\d{7}$/.test(control.value)
        ? null
        : { invalidNumberPhone: true };
    }
  }

  static OnlyCellPhoneValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^3\d{9}$/.test(control.value)
        ? null
        : { invalidNumberPhone: true };
    }
  }

  static AddressValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^[A-z0-9.#;/,-]+(?: [A-z0-9.#;/,-]+)*$/.test(control.value)
        ? null
        : { invalidAddress: true };
    }
  }

  // Nuevas validaciones
  static PlateValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^[A-Z]{1,3}[0-9]{1,2}[A-Z0-9]{1,2}|[0-9]{3}[A-Z]{3}/.test(
        control.value.toUpperCase()
      )
        ? null
        : { invalidPlate: true };
    }
  }

  static DireccionValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^[A-z0-9.#;/,-]+(?: [A-z0-9.#;/,-]+)*$/.test(control.value)
        ? null
        : { DIRECCION_INVALIDA: true };
    }
  }

  static NumeroDeTelefonoValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /[3]([0-5])+([0-9]{8})$/.test(control.value)
        ? null
        : { TELEFONO_INVALIDO: true };
    }
  }

  static SoloNumerosValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^\d+$/.test(control.value) ? null : { SOLO_NUMEROS: true };
    }
  }

  static NumeroDeMotorValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^([a-zA-Z0-9_.-]*)$/.test(control.value)
        ? null
        : { NUMERO_DE_MOTOR_INVALIDO: true };
    }
  }

  static VinValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      const vinSize = control.value.length;
      if (vinSize >= 15 && vinSize <= 17) {
        return /^(?:(?![ioqñ])[a-z0-9])+$/.test(control.value)
          ? null
          : { VIN_ERRONEO: true };
      } else {
        return { VIN_LONGITUD: true };
      }
    }
  }

  static NumeroDeChasisValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^[a-zA-Z0-9]{1,25}$/.test(control.value)
        ? null
        : { NUMERO_DE_CHASIS_INVALIDO: true };
    }
  }

  static pasaporteValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /([0-9]|[a-z]){4,11}/.test(control.value)
        ? null
        : { NUMERO_DE_PASAPORTE_INVALIDO: true };
    }
  }

  static cedulaExtranjeriaValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^([a-zA-Z]{1,5})?[1-9][0-9]{3,7}$/.test(control.value)
        ? null
        : { NUMERO_DE_CEDULA_EXTRANJERIA_INVALIDO: true };
    }
  }

  static onlyAlphanumericValidator(control: FormControl): ValidationErrors {
    if (control.value) {
      return /^[a-zA-Z0-9]+$/.test(control.value)
        ? null
        : { ALFANUMERICO_INVALIDO: true };
    }
  }

  static TerminosCondicionesValidador(control: FormControl): ValidationErrors {
    if (control.value) {
      return null;
    } else {
      return { TERMINOS_Y_CONDICIONES_INVALIDO: true };
    }
  }

  static mayorDeEdadValidator(control: FormControl): ValidationErrors {
    return ageValidator(control.value) >= 18
      ? null
      : { MAYOR_DE_EDAD_INVALID: true };
  }

  static fechaExpedicionValidator(control: FormControl): ValidationErrors {
    return ageValidator(control.value) >= 18
      ? null
      : { FECHA_EXPEDICION_INVALID: true };
  }

  static menorDeEdadConTIValidator(control: FormControl): ValidationErrors {
    const currentAge = ageValidator(control.value);
    return currentAge >= 7 && currentAge < 18
      ? null
      : { MENOR_DE_EDAD_TI_INVALID: true };
  }

  static menorDeEdadConRCValidator(control: FormControl): ValidationErrors {
    return ageValidator(control.value) < 7
      ? null
      : { MENOR_DE_EDAD_RC_INVALID: true };
  }

  static documentoMayorDeEdadValidator(control: FormControl): ValidationErrors {
    return control.value.value === 'C' || control.value.value === 'E'
      ? null
      : { DOCUMENTO_INVALIDO: true };
  }

  static dateLessThanCurrent(control: FormControl): ValidationErrors {
    const ngbDate = control.value;
    if (!ngbDate) {
      return null;
    }
    const date = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return date < currentDate ? null : { INVALID_DATE: true };
  }

 

  static minAndMaxDayAge(control: FormControl): ValidationErrors {
    if (control.value >= 1 && control.value <= 31) {
      return null;
    } else {
      return { LIMITE_DIA_INVALIDO: true };
    }
  }

  static pesoPersonaValidator(control: FormControl): ValidationErrors {
    return control.value >= 20 && control.value <= 200
      ? null
      : { LIMITE_PESO_INVALIDO: true };
  }

  static estaturaPersonaValidator(control: FormControl): ValidationErrors {
    return control.value >= 150 && control.value <= 210
      ? null
      : { LIMITE_ESTATURA_INVALIDO: true };
  }
}
