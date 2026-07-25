import { Component } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { AvatarComponent } from '../../../shared/ui/display/avatar';
import { BadgeComponent } from '../../../shared/ui/display/badge';
import { StatusChipComponent } from '../../../shared/components/status-chip/status-chip.component';
import { CardComponent } from '../../../shared/components/card';
import { IconComponent } from '../../../shared/ui/display/icon';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectDemoComponent } from "./select-demo.component";
import { DropdownComponent } from '../../../shared/components/dropdown';
import { DropdownItem } from '../../../shared/components/dropdown/models/dropdown.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    AvatarComponent,
    BadgeComponent,
    StatusChipComponent,
    IconButtonComponent,
    CardComponent,
    IconComponent,
    DropdownComponent,
    InputComponent,
    SelectDemoComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  menuItems: DropdownItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: 'user',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: 'log-out',
      danger: true,
    },
  ];

  onMenuClick(item: DropdownItem): void {
    console.log('Menu item clicked:', item);
  }
}
