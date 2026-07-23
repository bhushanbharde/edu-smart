import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erp-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
