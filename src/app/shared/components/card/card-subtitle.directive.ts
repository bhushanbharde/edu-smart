import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardSubtitle]',
  standalone: true,
  host: {
    class: 'erp-card__subtitle',
  },
})
export class CardSubtitleDirective {}
