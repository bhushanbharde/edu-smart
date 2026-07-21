import {
    Injectable,
    inject,
    signal,
    computed
} from '@angular/core';

import {
    BreakpointObserver,
    Breakpoints
} from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root'
})
export class ViewportService {

    private readonly breakpointObserver =
        inject(BreakpointObserver);

    readonly width = signal(window.innerWidth);

    readonly mobile = signal(false);

    readonly tablet = signal(false);

    readonly desktop = signal(true);

    readonly handset = computed(() => this.mobile());

    constructor() {

        window.addEventListener('resize', () => {
            this.width.set(window.innerWidth);
        });

        this.breakpointObserver
            .observe([
                Breakpoints.Handset,
                Breakpoints.Tablet,
                Breakpoints.Web
            ])
            .subscribe(result => {

                this.mobile.set(
                    result.breakpoints[Breakpoints.Handset]
                );

                this.tablet.set(
                    result.breakpoints[Breakpoints.Tablet]
                );

                this.desktop.set(
                    result.breakpoints[Breakpoints.Web]
                );

            });

    }

}