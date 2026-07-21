import {
    Injectable,
    computed,
    signal
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiStore {

    readonly loading =
        signal(false);

    readonly loadingMessage =
        signal('Loading...');

    readonly dialogOpen =
        signal(false);

    readonly snackbarVisible =
        signal(false);

    readonly snackbarMessage =
        signal('');

    readonly progress =
        signal(0);

    readonly busy = computed(() =>
        this.loading() ||
        this.dialogOpen()
    );

    showLoader(
        message = 'Loading...'
    ): void {

        this.loadingMessage.set(message);

        this.loading.set(true);

    }

    hideLoader(): void {

        this.loading.set(false);

    }

    openDialog(): void {

        this.dialogOpen.set(true);

    }

    closeDialog(): void {

        this.dialogOpen.set(false);

    }

    showSnackbar(
        message: string
    ): void {

        this.snackbarMessage.set(message);

        this.snackbarVisible.set(true);

        setTimeout(() => {

            this.snackbarVisible.set(false);

        }, 3000);

    }

}