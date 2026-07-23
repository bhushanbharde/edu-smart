import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { NgClass } from '@angular/common';

import { CardPadding, CardVariant } from './card.types';

@Component({
  selector: 'sms-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  variant: CardVariant = 'default';

  @Input()
  padding: CardPadding = 'md';

  @Input()
  hover = false;

  @Input()
  fullHeight = false;

  @HostBinding('class.full-height')
  get isFullHeight(): boolean {
    return this.fullHeight;
  }
}
