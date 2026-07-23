import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarMenuItem } from '../../models/sidebar-menu-item.model';
import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

@Component({
  selector: 'erp-sidebar-menu-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent {
  @Input({ required: true })
  item!: SidebarMenuItem;

  @Input()
  collapsed = false;

  @Output()
  navigate = new EventEmitter<void>();

  onNavigate(): void {
    this.navigate.emit();
  }
}
