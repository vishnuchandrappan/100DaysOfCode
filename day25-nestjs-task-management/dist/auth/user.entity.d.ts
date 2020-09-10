import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    validatePassword: (password: string) => Promise<boolean>;
}
