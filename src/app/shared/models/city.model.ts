export interface ILocation{
    c_digo_dane_del_departamento: string;
    departamento: string;
    c_digo_dane_del_municipio: string;
    municipio: string;
}



export class Location implements ILocation{
    constructor(
        public c_digo_dane_del_departamento: string,
        public departamento: string,
        public c_digo_dane_del_municipio: string,
        public municipio: string
    ){}
}
