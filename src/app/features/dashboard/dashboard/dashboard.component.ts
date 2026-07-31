import { Component } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { AvatarComponent } from '../../../shared/ui/display/avatar';
import { BadgeComponent } from '../../../shared/ui/display/badge';
import { StatusChipComponent } from '../../../shared/components/status-chip/status-chip.component';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
} from '../../../shared/components/card';
import { IconComponent } from '../../../shared/ui/display/icon';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectDemoComponent } from './select-demo.component';
import { TextareaComponent } from '../../../shared/components/textarea';
import { CheckboxComponent } from '../../../shared/components/checkbox';
import { RadioComponent } from '../../../shared/components/radio';
import { RadioGroupComponent } from '../../../shared/components/radio-group';
import { DatePickerComponent } from '../../../shared/components/date-picker';
import { FileUploadComponent } from '../../../shared/components/file-upload/file-upload.component';
import { ButtonComponent } from '../../../shared/components/button';
import { StatCardComponent } from '../../../shared/components/stat-card';
import { ChipComponent } from '../../../shared/components/chip';
import { TooltipComponent } from '../../../shared/ui/feedback/tooltip/tooltip.component';
import {
  DropdownComponent,
  DropdownItem,
} from '../../../shared/components/dropdown';
import { SwitchComponent } from '../../../shared/components/switch';
import { TimePickerComponent } from '../../../shared/components/time-picker';
import { SearchComponent } from '../../../shared/components/search';
import { ProgressComponent } from "../../../shared/components/progress";

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
    SelectDemoComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    RadioGroupComponent,
    DatePickerComponent,
    FileUploadComponent,
    ButtonComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent,
    StatCardComponent,
    ChipComponent,
    TooltipComponent,
    SwitchComponent,
    TimePickerComponent,
    SearchComponent,
    ProgressComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  notificationsEnabled: any;
  autoSave: any;
  startTime: any;
  endTime: any;
  searchTerm = '';

  onSearch(value: string): void {
    console.log('Searching:', value);
  }

  onStudentAction(item: DropdownItem): void {
    switch (item.value) {
      case 'view':
        // View student
        break;

      case 'edit':
        // Edit student
        break;

      case 'delete':
        // Delete student
        break;
    }
  }

  studentActions: DropdownItem[] = [
    {
      label: 'View Student',
      value: 'view',
      icon: 'profile',
    },
    {
      label: 'Edit Student',
      value: 'edit',
      icon: 'edit',
    },
    {
      label: 'Delete Student',
      value: 'delete',
      icon: 'delete',
      danger: true,
    },
  ];

  onMenuClick(item: DropdownItem): void {
    console.log('Menu item clicked:', item);
  }

  selectedFile?: File;

  onFileSelected(file: File) {
    this.selectedFile = file;

    console.log(file);
  }
}
