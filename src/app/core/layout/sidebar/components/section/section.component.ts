import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarSection } from '../../models/sidebar-section.model';
import { SidebarMenuGroupComponent } from '../menu-group/menu-group.component';
import { SidebarMenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'erp-sidebar-section',
  standalone: true,
  imports: [CommonModule, SidebarMenuGroupComponent, SidebarMenuItemComponent],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSectionComponent {
  @Input({ required: true })
  section!: SidebarSection;

  @Input()
  collapsed = false;
}
