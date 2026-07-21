import {

    Injectable,

    inject,

    signal,

    computed

} from '@angular/core';

import { BrowserService } from '../browser/browser.service';

import { StorageService } from '../storage/storage.service';

import {

    STORAGE_THEME

} from '../storage/storage.constants';

import {

    ThemeMode

} from './theme.types';

@Injectable({

    providedIn: 'root'

})
export class ThemeService {

    private browser = inject(BrowserService);

    private storage = inject(StorageService);

    readonly mode = signal<ThemeMode>(

        this.storage.get<ThemeMode>(

            STORAGE_THEME

        ) ?? 'system'

    );

    readonly dark = computed(() => {

        if (this.mode() === 'dark') {

            return true;

        }

        if (this.mode() === 'light') {

            return false;

        }

        return this.browser

            .matchMedia(

                '(prefers-color-scheme: dark)'

            )

            ?.matches ?? false;

    });

    initialize(): void {

        this.apply();

    }

    setMode(

        mode: ThemeMode

    ): void {

        this.mode.set(mode);

        this.storage.set(

            STORAGE_THEME,

            mode

        );

        this.apply();

    }

    toggle(): void {

        this.setMode(

            this.dark()

                ? 'light'

                : 'dark'

        );

    }

    private apply(): void {

        const html = this.browser.document.documentElement;

        html.classList.toggle(

            'dark-theme',

            this.dark()

        );

        html.classList.toggle(

            'light-theme',

            !this.dark()

        );

    }

}