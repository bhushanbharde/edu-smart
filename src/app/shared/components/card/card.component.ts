import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'erp-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly bordered = input(true);

  readonly hover = input(false);

  readonly noPadding = input(false);
}
