import { Injectable, signal } from '@angular/core';

import {
  ToastConfig,
  ToastItem,
  ToastPosition,
  ToastType,
} from './toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  readonly toasts = signal<ToastItem[]>([]);

  private readonly defaultDuration = 5000;

  private readonly defaultPosition: ToastPosition = 'top-right';

  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  success(
    message: string,
    options?: Omit<ToastConfig, 'message' | 'type'>,
  ): string {
    return this.show({
      ...options,
      message,
      type: 'success',
    });
  }

  error(
    message: string,
    options?: Omit<ToastConfig, 'message' | 'type'>,
  ): string {
    return this.show({
      ...options,
      message,
      type: 'error',
    });
  }

  warning(
    message: string,
    options?: Omit<ToastConfig, 'message' | 'type'>,
  ): string {
    return this.show({
      ...options,
      message,
      type: 'warning',
    });
  }

  info(
    message: string,
    options?: Omit<ToastConfig, 'message' | 'type'>,
  ): string {
    return this.show({
      ...options,
      message,
      type: 'info',
    });
  }

  loading(
    message: string,
    options?: Omit<ToastConfig, 'message' | 'type'>,
  ): string {
    return this.show({
      ...options,
      message,
      type: 'loading',
      duration: 0,
    });
  }

  show(config: ToastConfig): string {
    const id = this.generateId();

    const toast: ToastItem = {
      id,
      type: config.type ?? 'info',
      title: config.title,
      message: config.message,

      duration: config.duration ?? this.defaultDuration,

      dismissible: config.dismissible ?? true,

      actionLabel: config.actionLabel,
      onAction: config.onAction,

      position: config.position ?? this.defaultPosition,
    };

    this.toasts.update((current) => [...current, toast]);

    if (toast.duration > 0 && toast.type !== 'loading') {
      const timer = setTimeout(() => {
        this.dismiss(id);
      }, toast.duration);

      this.timers.set(id, timer);
    }

    return id;
  }

  dismiss(id: string): void {
    const timer = this.timers.get(id);

    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }

    this.toasts.update((current) => current.filter((toast) => toast.id !== id));
  }

  dismissAll(): void {
    this.timers.forEach((timer) => {
      clearTimeout(timer);
    });

    this.timers.clear();

    this.toasts.set([]);
  }

  update(id: string, changes: Partial<ToastItem>): void {
    this.toasts.update((current) =>
      current.map((toast) =>
        toast.id === id ? { ...toast, ...changes } : toast,
      ),
    );
  }

  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}
