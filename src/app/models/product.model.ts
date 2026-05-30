export interface Product {
    id: number;
    name: string;
    price: number;
    category: 'electronics' | 'clothing' | 'home' | 'sports';
    isAvailable: boolean; 
}