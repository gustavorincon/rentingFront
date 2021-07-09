export interface IFilterPropertyDto{
    code: string;
    registrationNumber: string;
    country: string;
    province: string;
    city: string;
    description: string;
    state: string;
    rentingPrice: string;
    area: string;
    rooms: string;
    bathrooms: string;
    parkings: string;
    type: string;
    furnished: string;
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
        public rentingPrice: string,
        public area: string,
        public rooms: string,
        public bathrooms: string,
        public parkings: string,
        public type: string,
        public furnished: string
    ){}
}
