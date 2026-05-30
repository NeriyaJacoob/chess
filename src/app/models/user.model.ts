export interface User {
    id: number;
    fullName: string;
    email: string;
    role: 'admin' | 'user' | 'technician';
}