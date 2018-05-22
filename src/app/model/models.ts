export enum Category {
    LAPTOPS,
    PHONES,
    COMPUTERS
}

export interface FilterModel {
    name: string;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    isActive: boolean;
}
