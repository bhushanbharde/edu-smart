import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardContent]',
  standalone: true,
  host: {
    class: 'erp-card__content',
  },
})
export class CardContentDirective {}
