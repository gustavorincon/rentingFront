import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/external-apis/form-validators/src/lib/form-validators.service';
import { InmuebleFacade } from '../../shared/facades/inmueble.facade';
import { estadosInmueble } from '../../shared/mocks/estadoInmueble';
import { estadosSioNo } from '../../shared/mocks/siono';
import { tipoInmueble } from '../../shared/mocks/tipoInmueble';
import { tipoOferta } from '../../shared/mocks/tipoOferta';
import { OptionInput } from '../../shared/model/OptionInput.model';
import { registrarInmueble } from '../../store/actions/inmuble.actions';

@Component({
  selector: 'app-registro-inmueble',
  templateUrl: './registro-inmueble.component.html',
  styleUrls: ['./registro-inmueble.component.scss']
})
export class RegistroInmuebleComponent implements OnInit {

  formSubmitted: boolean;
  tipoOfertas: OptionInput[] = tipoOferta;
  tipoInmuebles: OptionInput[] = tipoInmueble;
  estratosInmueble: OptionInput[] = this.getNumberOption(5);
  habitacionesInmueble: OptionInput[] = this.getNumberOption(10);
  banosInmueble: OptionInput[] = this.getNumberOption(5);
  pisosInmueble: OptionInput[] = this.getNumberOption(5);
  estadosInmuebles: OptionInput[] = estadosInmueble;
  numeroAmbientes: OptionInput[] = this.getNumberOption(5);
  adminIncluida: OptionInput[] = estadosSioNo;

  form: FormGroup;
  constructor( private formBuilder: FormBuilder,
               private inmuebleFacade: InmuebleFacade) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      inmueble: this.createInmuebleFormGroup(),
    });
  }

  createInmuebleFormGroup(): FormGroup {
    return this.formBuilder.group({
      tipoOferta: [null, Validators.required],
      tipoInmueble: [null, Validators.required],
      ciudadInmueble: [null, [Validators.required, FormValidators.OnlyLettersValidator]],
      barrioInmueble: [null, [Validators.required, FormValidators.OnlyLettersValidator]],
      direccionInmueble: [null, [Validators.required]],
      precioInmueble: [null, [Validators.required, FormValidators.OnlyNumbersValidator]],
      estratoInmueble: [null, Validators.required],
      areaInmueble: [null, [Validators.required, FormValidators.OnlyNumbersValidator]],
      numeroAmbientesInmueble: [null, Validators.required],
      adminIncluidaInmueble: [null, Validators.required],
      numeroHabitacionesInmueble: [null, Validators.required],
      numeroBanosInmueble: [null, Validators.required],
      pisosInterioresInmueble: [null, Validators.required],
      estadoInmueble: [null, Validators.required],
      caracteristicas: [null, [Validators.required]],
      imagenesInmueble: [null, Validators.required]
    });
  }

  getFormGroup(groupName: string): FormGroup {
    return this.form.get(groupName) as FormGroup;
  }

  getFormControl(group: string, name: string): FormControl {
    return this.getFormGroup(group).get(name) as FormControl;
  }


  getNumberOption( limit: number): OptionInput[]{
    const list: OptionInput[] = [];
    for (let index = 1; index <= limit; index++) {
      const item: OptionInput = { value: index.toString(), name: index.toString()};
      list.push(item);
    }
    return list;
  }

  submit(): void{
    this.formSubmitted = true;
    console.log(this.form.value.inmueble);
    if (this.form.valid) {
      this.inmuebleFacade.dispatch(registrarInmueble({inmueble: this.form.value.inmueble }));
    }
  }
}
