import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';

import { ToastConfig, ToastItem, ToastPosition } from './toast.types';

import { CommonModule } from '@angular/common';
import { IconComponent } from '../../display/icon';
import { ToastService } from './toast.service';


@Component({
  selector: 'erp-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnDestroy {

  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  private readonly defaultDuration = 5000;

  private readonly defaultPosition: ToastPosition = 'top-right';

  constructor(private readonly toastService: ToastService) {}

  get toasts() {
    return this.toastService.toasts;
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
    this.timers.forEach((timer) => clearTimeout(timer));

    this.timers.clear();

    this.toasts.set([]);
  }

  handleAction(toast: ToastItem): void {
    toast.onAction?.();
    this.dismiss(toast.id);
  }

  getToastsByPosition(position: ToastPosition): ToastItem[] {
    return this.toasts().filter((toast) => toast.position === position);
  }

  trackById(_: number, toast: ToastItem): string {
    return toast.id;
  }

  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }

  ngOnDestroy(): void {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers.clear();
  }
}
