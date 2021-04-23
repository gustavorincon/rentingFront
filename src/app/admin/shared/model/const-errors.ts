import { InputTextErrorControl } from 'src/external-apis/form-components/src/lib/inputs/input-text-material-error-control.model';


export const errorControls: InputTextErrorControl[] = [
  {
    key: 'invalidPlate',
    errorMessage: 'Ingrese una placa valida',
  },
  {
    key: 'required',
    errorMessage: 'Este campo es requerido',
  },
  {
    key: 'MIN',
    errorMessage: 'Cantidad mínima incorrecta',
  },
  {
    key: 'min',
    errorMessage: 'Cantidad mínima incorrecta',
  },
  {
    key: 'max',
    errorMessage: 'Cantidad maxima incorrecta',
  },
  {
    key: 'invalidEmail',
    errorMessage: 'Email incorrecto',
  },
  {
    key: 'invalidId',
    errorMessage: 'Documento inválido',
  },
  {
    key: 'invalidNumberPhone',
    errorMessage: 'Número telefónico inválido',
  },
  {
    key: 'onlyLetters',
    errorMessage: 'Este campo solo puede contener letras',
  },
  {
    key: 'onlynumbers',
    errorMessage: 'Este campo solo puede contener numeros',
  },
  {
    key: 'ALFANUMERICO_INVALIDO',
    errorMessage: 'Este campo solo puede ser alfanumerico',
  },
  {
    key: 'notSame',
    errorMessage:
      'El correo de confirmación no coincide con el correo ingresado anteriormente',
  },
  {
    key: 'DOCUMENTO_INVALIDO',
    errorMessage: 'Número de documento inválido',
  },
  {
    key: 'LIMITE_ANIO_INVALIDO',
    errorMessage: 'El año esta fuera del limite',
  },
  {
    key: 'LIMITE_MES_INVALIDO',
    errorMessage: 'El mes esta fuera del limite',
  },
  {
    key: 'LIMITE_DIA_INVALIDO',
    errorMessage: 'El día esta fuera del limite',
  },
];
