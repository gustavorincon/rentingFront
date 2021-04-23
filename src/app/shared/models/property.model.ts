export interface IProperty{
    id:string; 
    type:string; 
    squareMeters:number;
    address:string; 
    imageUrl:string; 
    price:number; 
    createdDate:Date; 
    bedrooms:number; 
    bathrooms:number; 
}



export class Property implements IProperty{
    constructor(
        public id:string,
        public type:string, 
        public squareMeters:number,
        public address:string, 
        public imageUrl:string, 
        public price:number, 
        public createdDate:Date, 
        public bedrooms:number, 
        public bathrooms:number, 
    ){}
}
