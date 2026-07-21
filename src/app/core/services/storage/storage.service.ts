import { Injectable, inject } from '@angular/core';
import { BrowserService } from '../browser/browser.service';
import { StorageItem } from './storage.types';
import { STORAGE_PREFIX } from './storage.constants';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private readonly browser = inject(BrowserService);

    private prefix(key: string): string {

        return `${STORAGE_PREFIX}:${key}`;

    }

    set<T>(
        key: string,
        value: T,
        expiresInMinutes?: number
    ): void {

        const storage = this.browser.localStorage;

        if (!storage) return;

        const item: StorageItem<T> = {

            value,

            expiresAt: expiresInMinutes
                ? Date.now() + expiresInMinutes * 60000
                : undefined

        };

        storage.setItem(

            this.prefix(key),

            JSON.stringify(item)

        );

    }

    get<T>(key: string): T | null {

        const storage = this.browser.localStorage;

        if (!storage) {

            return null;

        }

        const raw = storage.getItem(

            this.prefix(key)

        );

        if (!raw) {

            return null;

        }

        try {

            const item = JSON.parse(raw) as StorageItem<T>;

            if (

                item.expiresAt &&

                Date.now() > item.expiresAt

            ) {

                storage.removeItem(this.prefix(key));

                return null;

            }

            return item.value;

        }

        catch {

            return null;

        }

    }

    remove(key: string): void {

        this.browser.localStorage?.removeItem(

            this.prefix(key)

        );

    }

    clear(): void {

        this.browser.localStorage?.clear();

    }

}