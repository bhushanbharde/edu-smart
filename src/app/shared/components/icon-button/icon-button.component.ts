import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export type IconButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erp-icon-button',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly variant = input<IconButtonVariant>('ghost');

  readonly size = input<IconButtonSize>('md');

  readonly disabled = input(false);

  readonly ariaLabel = input.required<string>();

  readonly clicked = output<void>();

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.clicked.emit();
  }
}
