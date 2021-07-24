 
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'siNoPipe'
})
export class SiNoPipe implements PipeTransform {
    transform(value: boolean): string {
         const result = value === true ? 'Si' : 'No';
         return result;
    }
}
