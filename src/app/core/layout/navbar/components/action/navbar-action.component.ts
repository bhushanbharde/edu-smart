import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

@Component({
  selector: 'erp-navbar-action',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar-action.component.html',
  styleUrls: ['./navbar-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarActionComponent {
  @Input({ required: true })
  icon!: string;

  @Input()
  badge?: number;

  @Input()
  active = false;

  @Input()
  ariaLabel = '';

  @Output()
  action = new EventEmitter<void>();

  onClick(): void {
    this.action.emit();
  }
}
