import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erp-card-body',
  standalone: true,
  template: `<div class="erp-card-body"><ng-content /></div>`,
  styleUrls: ['./card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBodyComponent {}
