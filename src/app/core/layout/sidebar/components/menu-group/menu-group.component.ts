import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';

import { SidebarMenuItem } from '../../models/sidebar-menu-item.model';
import { SidebarMenuItemComponent } from '../menu-item/menu-item.component';
import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

@Component({
  selector: 'erp-sidebar-menu-group',
  standalone: true,
  imports: [SidebarMenuItemComponent, IconComponent],
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuGroupComponent {
  @Input({ required: true })
  item!: SidebarMenuItem;

  @Input()
  collapsed = false;

  @Output()
  navigate = new EventEmitter<void>();

  readonly expanded = signal(false);

  ngOnInit(): void {
    this.expanded.set(this.item.expanded ?? false);
  }

  toggle(): void {
    if (this.collapsed) {
      return;
    }

    this.expanded.update((v) => !v);
  }

  onNavigate(): void {
    this.navigate.emit();
  }
}
