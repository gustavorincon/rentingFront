import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormularioInmueble } from '../../shared/enums/formInmueble.enum';
import { OptionInput } from '../../shared/model/OptionInput.model';

@Component({
  selector: 'app-datos-inmueble',
  templateUrl: './datos-inmueble.component.html',
  styleUrls: ['./datos-inmueble.component.scss']
})
export class DatosInmuebleComponent implements OnInit {

  @Input() inmuebleFormGroup: FormGroup;
  @Input() submitted: boolean;
  @Input() tiposOferta: OptionInput[];
  @Input() tiposInmuebles: OptionInput[];
  @Input() estratosInmueble: OptionInput[];
  @Input() habitacionesInmueble: OptionInput[];
  @Input() banosInmueble: OptionInput[];
  @Input() pisosInmueble: OptionInput[];
  @Input() estadosInmuebles: OptionInput[];
  @Input() ambientes: OptionInput[];
  @Input() adminOption: OptionInput[];


  constructor() { }

  ngOnInit(): void {}

  ValidateTipoOfertas(): void{
    console.log('tipoOfertasss');
  }

  ValidateTipoInmueble(): void{
    console.log('tipoInmueble');
  }

  ValidateEstrato(): void{

  }

  ValidateHabitaciones(): void{

  }
  ValidateBanos(): void{

  }
  ValidatePisos(): void{

  }


  get tipoOferta(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.TIPO_OFERTA);
  }
  get tipoInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.TIPO_INMUEBLE);
  }
  get ciudadInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.CIUDAD_INMUEBLE);
  }

  get barrioInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.BARRIO_INMUEBLE);
  }

  get direccionInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.DIRECCION_INMUEBLE);
  }
  get precioInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.PRECIO_INMUEBLE);
  }

  get estratoInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.ESTRATO_INMUEBLE);
  }

  get areaInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.AREA_INMUEBLE);
  }
  get numeroAmbientes(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.NUMERO_AMBIENTES);
  }
  get adminInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.ADMIN_INMUEBLE);
  }

  get numeroHabitaciones(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.NUMERO_HABITACIONES);
  }

  get numeroBanos(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.NUMERO_BANOS);
  }

  get pisosInterioes(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.PISOS_INTERIORES);
  }

  get estadoInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.ESTADO_INMUEBLE);
  }

  get imagenesInmueble(): AbstractControl {
    return this.inmuebleFormGroup.get(FormularioInmueble.IMAGENES_INMUEBLE);
  }

}
