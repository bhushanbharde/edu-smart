import {
    Injectable,
    signal,
    computed
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BreakpointService {

    readonly width = signal(window.innerWidth);

    readonly mobile = computed(() =>
        this.width() < 768
    );

    readonly tablet = computed(() =>
        this.width() >= 768 &&
        this.width() < 1200
    );

    readonly desktop = computed(() =>
        this.width() >= 1200
    );

    constructor() {

        window.addEventListener(
            'resize',
            () => {

                this.width.set(
                    window.innerWidth
                );

            }
        );

    }

}