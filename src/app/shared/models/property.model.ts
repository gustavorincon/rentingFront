export interface IProperty{
    code: string;
    registrationNumber: string;
    country: string;
    province: string;
    city: string;
    description: string;
    state: string;
    rentingPrice: number;
    area: number;
    rooms: number;
    bathrooms: number;
    parkings: number;
    type: string;
    furnished: boolean;
    elevator: boolean;
    visitorParking: boolean;
    floorLevel: number;
    communalArea: boolean;
    gym: boolean;
    images: IPropertyImmage[];
    createdDate: Date;
}

export interface IPropertyImmage{
    url: string;
    description: string;
    type: string;
    state: string;
}

export class Property implements IProperty{
    constructor(
        public code: string,
        public registrationNumber: string,
        public country: string,
        public province: string,
        public city: string,
        public description: string,
        public state: string,
        public rentingPrice: number,
        public area: number,
        public rooms: number,
        public bathrooms: number,
        public parkings: number,
        public type: string,
        public furnished: boolean,
        public elevator: boolean,
        public visitorParking: boolean,
        public floorLevel: number,
        public communalArea: boolean,
        public gym: boolean,
        public images: IPropertyImmage[],
        public createdDate: Date,
    ){}
}
