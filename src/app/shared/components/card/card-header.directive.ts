import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardHeader]',
  standalone: true,
  host: {
    class: 'erp-card__header',
  },
})
export class CardHeaderDirective {}
