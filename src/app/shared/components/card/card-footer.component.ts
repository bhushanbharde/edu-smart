import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erp-card-footer',
  standalone: true,
  template: `<div class="erp-card-footer"><ng-content /></div>`,
  styleUrls: ['./card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {}
