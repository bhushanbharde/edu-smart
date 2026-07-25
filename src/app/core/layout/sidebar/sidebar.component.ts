import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarBuilderService } from './services/sidebar-builder.service';
import { SidebarStateService } from './services/sidebar-state.service';

import { SidebarLogoComponent } from './components/logo/logo.component';
import { SidebarUserCardComponent } from './components/user-card/user-card.component';
import { SidebarToggleComponent } from './components/toggle/toggle.component';
import { SidebarSectionComponent } from './components/section/section.component';
import { SidebarMenuItemComponent } from './components/menu-item/menu-item.component';
import { SidebarMenuGroupComponent } from './components/menu-group/menu-group.component';
import { BreakpointService } from '../../services/breakpoint/breakpoint.service';

@Component({
  selector: 'erp-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarLogoComponent,
    SidebarUserCardComponent,
    SidebarMenuGroupComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly builder = inject(SidebarBuilderService);
  state = inject(SidebarStateService);
  breakpoint = inject(BreakpointService);
  sidebarState = inject(SidebarStateService);

  mobileOpen = this.sidebarState.mobileOpen;

  collapsed = this.state.collapsed;
}
