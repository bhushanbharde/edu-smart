import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { TabItem } from './tabs.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-tabs',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  tabs: TabItem[] = [
    {
      label: 'Overview',
      value: 'overview',
      icon: 'dashboard',
    },
    {
      label: 'Students',
      value: 'students',
      icon: 'users',
      badge: 128,
    },
    {
      label: 'Attendance',
      value: 'attendance',
      icon: 'timetable',
    },
  ];

  activeTab = 'overview';

  @Input() activeValue = '';

  @Input() variant: 'line' | 'pill' = 'line';

  @Output() activeChange = new EventEmitter<string>();

  selectTab(tab: TabItem): void {
    if (tab.disabled) {
      return;
    }

    this.activeChange.emit(tab.value);
  }

  isActive(tab: TabItem): boolean {
    return tab.value === this.activeValue;
  }

  trackByValue(index: number, tab: TabItem): string {
    return tab.value;
  }
}
