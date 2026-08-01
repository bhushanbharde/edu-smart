export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading';

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface ToastConfig {
  type?: ToastType;
  title?: string;
  message: string;

  duration?: number;
  dismissible?: boolean;

  actionLabel?: string;
  onAction?: () => void;

  position?: ToastPosition;
}

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;

  duration: number;
  dismissible: boolean;

  actionLabel?: string;
  onAction?: () => void;

  position: ToastPosition;
}
