import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardActions]',
  standalone: true,
  host: {
    class: 'erp-card__actions',
  },
})
export class CardActionsDirective {}
