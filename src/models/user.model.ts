export interface User {
    id: number;
    fullName: string;
    email: string;
    irole: 'admin' | 'user' | 'technician';
}