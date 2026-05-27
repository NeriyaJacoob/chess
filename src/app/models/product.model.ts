export interface Product {
    id: number;
    name: string;
    price: number;
    icategory: 'electronics' | 'clothing' | 'home' | 'sports';
    isAvailable: boolean; 
}