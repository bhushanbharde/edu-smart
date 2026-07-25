import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarStateService } from '../sidebar/services/sidebar-state.service';

import { SidebarToggleComponent } from '../sidebar/components/toggle/toggle.component';
import { NavbarService } from './services/navbar.service';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { NavbarSearchComponent } from './components/search/navbar-search.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NavbarActionComponent } from './components/action/navbar-action.component';
import { BreakpointService } from '../../services/breakpoint/breakpoint.service';
import { ThemeService } from '../../services/theme/theme.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { DropdownComponent } from '../../../shared/components/dropdown';

@Component({
  selector: 'erp-navbar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarToggleComponent,
    NavbarSearchComponent,
    ThemeToggleComponent,
    FullscreenComponent,
    ProfileMenuComponent,
    NotificationComponent,
    NavbarActionComponent,
    DropdownComponent,
    ButtonComponent,
    // IconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly sidebar = inject(SidebarStateService);
  readonly navbar = inject(NavbarService);

  private breakpoint = inject(BreakpointService);
  private sidebarState = inject(SidebarStateService);
  theme = inject(ThemeService)

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleSidebar(): void {
    if (this.breakpoint.isMobile()) {
      this.sidebarState.toggleMobile();
      return;
    }

    this.sidebarState.toggle();
  }
}
