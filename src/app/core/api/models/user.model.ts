import { Role } from './role.model';

import { Permission } from './permission.model';

export interface User {

    id: number;

    name: string;

    email: string;

    phone: string | null;

    avatar: string | null;

    status: string;

    roles: Role[];

    permissions: Permission[];

}