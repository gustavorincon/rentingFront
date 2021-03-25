export interface IClient{
    idType:string; 
    idNumber:string; 
    firstName:string; 
    secondName:string; 
    firstLastName:string; 
    secondLastName:string; 
    email:string; 
    phoneNumber:string; 
    address:string; 
    city:string; 
    gender:string; 
    birthDate:string; 
}


export class Client implements IClient{
    constructor(
        public idType:string, 
        public idNumber:string, 
        public firstName:string, 
        public secondName:string, 
        public firstLastName:string, 
        public secondLastName:string, 
        public email:string, 
        public phoneNumber:string, 
        public address:string,
        public city:string,
        public gender:string, 
        public birthDate:string, 
    ){}
}