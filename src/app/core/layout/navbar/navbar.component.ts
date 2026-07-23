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
import { DropdownComponent } from "../../../shared/ui/dropdown";
import { ButtonComponent } from '../../../shared/ui/button';

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
    ButtonComponent
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly sidebar = inject(SidebarStateService);
  readonly navbar = inject(NavbarService);
}
