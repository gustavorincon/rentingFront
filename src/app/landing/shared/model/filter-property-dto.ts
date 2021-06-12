export interface IFilterPropertyDto{
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
}

export class FilterPropertyDto implements IFilterPropertyDto{
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
        public furnished: boolean
    ){}
}
