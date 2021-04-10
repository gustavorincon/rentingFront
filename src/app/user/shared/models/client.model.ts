export interface IClient{
    idType:string; 
    idNumber:string; 
    firstName:string; 
    secondName:string; 
    firstLastName:string; 
    secondLastName:string; 
    gender:string; 
    dniIssuedDate:string; 
    contact:IContact;
}

export interface IContact{ 
    email:string; 
    cellphone:string; 
    address:string; 
    city:string; 
    state:string; 
    country:string; 
}


export class Client implements IClient{
    constructor(
        public idType:string, 
        public idNumber:string, 
        public firstName:string, 
        public secondName:string, 
        public firstLastName:string, 
        public secondLastName:string, 
        public gender:string, 
        public dniIssuedDate:string, 
        public contact:IContact
    ){}
}


export class Contact implements IContact{
    constructor(
        public email:string, 
        public cellphone:string, 
        public address:string,
        public city:string,
        public state:string, 
        public country:string, 
    ){}
}