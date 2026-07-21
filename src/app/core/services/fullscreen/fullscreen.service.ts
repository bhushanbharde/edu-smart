import {
    Injectable,
    inject
} from '@angular/core';

import { BrowserService } from '../browser/browser.service';

@Injectable({
    providedIn: 'root'
})
export class FullscreenService {

    private readonly browser =
        inject(BrowserService);

    async enter(): Promise<void> {

        const document = this.browser.document;

        if (!document.fullscreenElement) {

            await document.documentElement.requestFullscreen();

        }

    }

    async exit(): Promise<void> {

        const document = this.browser.document;

        if (document.fullscreenElement) {

            await document.exitFullscreen();

        }

    }

    async toggle(): Promise<boolean> {

        const document = this.browser.document;

        if (document.fullscreenElement) {

            await this.exit();

            return false;

        }

        await this.enter();

        return true;

    }

    get enabled(): boolean {

        return !!this.browser.document.fullscreenElement;

    }

}