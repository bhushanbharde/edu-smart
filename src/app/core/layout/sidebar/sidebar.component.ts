import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarBuilderService } from './services/sidebar-builder.service';
import { SidebarStateService } from './services/sidebar-state.service';

import { SidebarLogoComponent } from './components/logo/logo.component';
import { SidebarMenuGroupComponent } from './components/menu-group/menu-group.component';
import { SidebarUserCardComponent } from './components/user-card/user-card.component';

@Component({
  selector: 'erp-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarLogoComponent,
    SidebarMenuGroupComponent,
    SidebarUserCardComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly state = inject(SidebarStateService);

  readonly builder = inject(SidebarBuilderService);
}
