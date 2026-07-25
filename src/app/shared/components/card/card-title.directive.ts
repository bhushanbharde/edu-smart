import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardTitle]',
  standalone: true,
  host: {
    class: 'erp-card__title',
  },
})
export class CardTitleDirective {}
