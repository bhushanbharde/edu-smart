import { Directive } from '@angular/core';

@Directive({
  selector: '[erpCardFooter]',
  standalone: true,
  host: {
    class: 'erp-card__footer',
  },
})
export class CardFooterDirective {}
