import {
    DOCUMENT,
    isPlatformBrowser
} from '@angular/common';

import {
    Injectable,
    PLATFORM_ID,
    inject
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BrowserService {

    private readonly platformId = inject(PLATFORM_ID);

    readonly document = inject(DOCUMENT);

    get isBrowser(): boolean {
        return isPlatformBrowser(this.platformId);
    }

    get window(): Window | null {

        if (!this.isBrowser) {
            return null;
        }

        return window;

    }

    get navigator(): Navigator | null {

        return this.window?.navigator ?? null;

    }

    get localStorage(): Storage | null {

        return this.window?.localStorage ?? null;

    }

    get sessionStorage(): Storage | null {

        return this.window?.sessionStorage ?? null;

    }

    get online(): boolean {

        return this.navigator?.onLine ?? false;

    }

    matchMedia(query: string): MediaQueryList | null {

        return this.window?.matchMedia(query) ?? null;

    }

}