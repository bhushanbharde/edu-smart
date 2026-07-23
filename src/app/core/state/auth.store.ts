import {

    Injectable,

    computed,

    inject,

    signal

} from '@angular/core';

import { User } from '../api/models/user.model';

import { ThemeService } from '../services/theme/theme.service';

@Injectable({

    providedIn: 'root'

})

export class AuthStore {

    private readonly theme = inject(ThemeService);

    readonly user = signal<User | null>(null);

    readonly token = signal<string | null>(null);

    readonly authenticated = computed(

        () => !!this.token()

    );

    readonly username = computed(

        () => this.user()?.name ?? ''

    );

    readonly initials = computed(() => {

        const user = this.user();

        if (!user) {

            return '';

        }

        return user.name

            .split(' ')

            .map(v => v.charAt(0))

            .join('');

    });

    setUser(user: User) {

        this.user.set(user);

    }

    setToken(token: string) {

        this.token.set(token);

    }

    logout() {

        this.user.set(null);

        this.token.set(null);

    }

}