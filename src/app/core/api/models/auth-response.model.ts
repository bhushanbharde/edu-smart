import { User } from './user.model';

export interface AuthResponse {

    token: string;

    refreshToken?: string;

    expiresAt: string;

    user: User;

}