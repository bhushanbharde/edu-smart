import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { LayoutService } from '../services/layout.service';
import { PageAction } from '../models/page-action.model';
import { IconComponent } from '../../../shared/ui/display/icon';

@Component({
  selector: 'sms-page-header',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  readonly layout = inject(LayoutService);

  @Output()
  actionClick = new EventEmitter<PageAction>();

  onActionClick(action: PageAction): void {
    if (action.disabled) {
      return;
    }

    this.actionClick.emit(action);
  }

  trackByAction(_: number, action: PageAction): string {
    return action.id;
  }
}
