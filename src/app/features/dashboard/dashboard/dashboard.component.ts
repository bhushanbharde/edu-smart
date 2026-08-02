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
import { ProgressComponent } from '../../../shared/components/progress';
import { SpinnerComponent } from '../../../shared/components/spinner';
import { SkeletonComponent } from '../../../shared/components/skeleton';
import { AlertComponent } from '../../../shared/components/alert';
import { ToastComponent } from '../../../shared/ui/feedback/toast/toast.component';
import { ToastService } from '../../../shared/ui/feedback/toast/toast.service';
import { ModalComponent } from '../../../shared/ui/feedback/modal/modal.component';
import { ConfirmDialogComponent } from '../../../shared/ui/feedback/confirm-dialog/confirm-dialog.component';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { MenuItem } from '../../../shared/components/menu/menu.types';
import { PopoverComponent } from '../../../shared/components/popover/popover.component';
import { TabsComponent } from '../../../shared/components/tabs/tabs.component';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { AccordionItem } from '../../../shared/components/accordion/accordion.types';
import {
  TableAction,
  TableColumn,
  TableFilter,
} from '../../../shared/components/table/table.types';
import { TableComponent } from '../../../shared/components/table/table.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { StepperComponent } from '../../../shared/components/stepper/stepper.component';
import { StepperItem } from '../../../shared/components/stepper/stepper.types';
import { DividerComponent } from '../../../shared/components/divider/divider.component';
import { TagComponent } from '../../../shared/components/tag/tag.component';
import { TableToolbarComponent } from '../../../shared/components/table-toolbar/table-toolbar.component';
import { FilterPanelComponent } from '../../../shared/components/filter-panel/filter-panel.component';
import { FilterField } from '../../../shared/components/filter-panel/filter-panel.types';
import { ColumnOption } from '../../../shared/components/column-selector/column-selector.types';
import { ColumnSelectorComponent } from '../../../shared/components/column-selector/column-selector.component';
import { BulkActionBarComponent } from '../../../shared/components/bulk-action-bar/bulk-action-bar.component';
import { BulkAction } from '../../../shared/components/bulk-action-bar/bulk-action-bar.types';
import { TableCellComponent } from '../../../shared/components/table-cell/table-cell.component';

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
    ProgressComponent,
    SpinnerComponent,
    SkeletonComponent,
    AlertComponent,
    // ToastComponent,
    ModalComponent,
    ConfirmDialogComponent,
    MenuComponent,
    PopoverComponent,
    TabsComponent,
    AccordionComponent,
    TableComponent,
    PaginationComponent,
    EmptyStateComponent,
    StepperComponent,
    DividerComponent,
    TagComponent,
    TableToolbarComponent,
    FilterPanelComponent,
    ColumnSelectorComponent,
    BulkActionBarComponent,
    TableCellComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
openColumnSelector() {
throw new Error('Method not implemented.');
}
openStudentFilters() {
throw new Error('Method not implemented.');
}
  studentFilterFields: FilterField[] = [];
  onStudentFilter($event: TableFilter[]) {
    throw new Error('Method not implemented.');
  }
  exportStudents($event: void) {
    throw new Error('Method not implemented.');
  }
  studentSearch: string = '';
  onAction($event: { action: TableAction<any>; row: any }) {
    throw new Error('Method not implemented.');
  }
  clearSelection() {
    throw new Error('Method not implemented.');
  }
  onBulkAction(action: BulkAction): void {
    switch (action.value) {
      case 'status':
        this.changeStatus();
        break;

      case 'export':
        this.exportSelected();
        break;

      case 'delete':
        this.deleteSelected();
        break;
    }
  }
  deleteSelected() {
    throw new Error('Method not implemented.');
  }
  exportSelected() {
    throw new Error('Method not implemented.');
  }
  changeStatus() {
    throw new Error('Method not implemented.');
  }
  selectedStudents: any = 0;
  // studentFilterValues: Record<string, string>;
  applyFilters($event: Record<string, string>) {
    throw new Error('Method not implemented.');
  }
  openColumns() {
    throw new Error('Method not implemented.');
  }
  importStudents() {
    throw new Error('Method not implemented.');
  }
  openFilters() {
    throw new Error('Method not implemented.');
  }
  activeFilterCount: number = 0;
  removeClass() {
    throw new Error('Method not implemented.');
  }
  clearFilters() {
    throw new Error('Method not implemented.');
  }
  addStudent() {
    throw new Error('Method not implemented.');
  }
  currentPage: number = 1;
  totalStudents: number = 1;
  showDialog: boolean = false;
  showModal: any;
  showDeleteDialog: boolean = false;
  deleting: boolean = false;
  notificationsEnabled: any;
  autoSave: any;
  startTime: any;
  endTime: any;
  searchTerm = '';
  bordered: any;
  striped: any;
  showPopover: boolean = false;
  showInfo: any;
  activeTab: string = '';
  tabs: any;
  removable: boolean = true;
  studentPage = 1;
  studentPageSize = 10;
  studentTotal = 125;

  onStudentPageChange(page: number): void {
    this.studentPage = page;

    // Later:
    // API call with page + pageSize
  }

  onStudentSearch(search: string): void {
    this.studentSearch = search;

    // API request later:
    //
    // GET /students?
    // search=aarav
    // &page=1
    // &pageSize=10
  }

  onStudentPageSizeChange(size: number): void {
    this.studentPageSize = size;

    this.studentPage = 1;

    // Later:
    // API call with page + pageSize
  }

  bulkActions: BulkAction[] = [
    {
      label: 'Change Status',
      value: 'status',
      icon: 'edit',
      variant: 'primary',
    },
    {
      label: 'Export',
      value: 'export',
      icon: 'download',
    },
    {
      label: 'Delete',
      value: 'delete',
      icon: 'delete',
      variant: 'danger',
    },
  ];

  columnsSelector: ColumnOption[] = [
    {
      key: 'student',
      label: 'Student',
      visible: true,
      disabled: true,
    },
    {
      key: 'admissionNo',
      label: 'Admission No.',
      visible: true,
    },
    {
      key: 'class',
      label: 'Class',
      visible: true,
    },
    {
      key: 'section',
      label: 'Section',
      visible: true,
    },
    {
      key: 'status',
      label: 'Status',
      visible: true,
    },
    {
      key: 'phone',
      label: 'Phone',
      visible: false,
    },
    {
      key: 'createdAt',
      label: 'Created At',
      visible: false,
    },
  ];

  onColumnsChange(columns: ColumnOption[]): void {
    this.columns = columns;
  }

  studentFilters: FilterField[] = [
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'Select status',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
    },
    {
      key: 'class',
      label: 'Class',
      type: 'select',
      placeholder: 'Select class',
      options: [
        {
          label: 'Class VII',
          value: '7',
        },
        {
          label: 'Class VIII',
          value: '8',
        },
      ],
    },
    {
      key: 'admissionNo',
      label: 'Admission Number',
      type: 'text',
      placeholder: 'Enter admission number',
    },
  ];

  steps: StepperItem[] = [
    {
      label: 'Student Details',
      description: 'Basic information',
    },
    {
      label: 'Parent Details',
      description: 'Contact information',
    },
    {
      label: 'Documents',
      description: 'Upload documents',
    },
    {
      label: 'Confirmation',
      description: 'Review information',
    },
  ];

  currentStep = 1;

  menuItems: MenuItem[] = [
    {
      label: 'Edit',
      value: 'edit',
      icon: 'edit',
    },
    {
      label: 'Duplicate',
      value: 'duplicate',
      icon: 'copy',
    },
    {
      divider: true,
      label: '',
    },
    {
      label: 'Delete',
      value: 'delete',
      icon: 'delete',
      danger: true,
    },
  ];

  accordionItems: AccordionItem[] = [
    {
      title: 'Student Information',
      icon: 'user',
      content: 'Basic student information and contact details.',
    },
    {
      title: 'Attendance',
      icon: 'calendar',
      content: 'View attendance records and attendance history.',
    },
    {
      title: 'Fee Details',
      icon: 'fees',
      content: 'View fee structure and payment history.',
    },
  ];

  columns: TableColumn<any>[] = [
    {
      key: 'name',
      label: 'Student',
    },
    {
      key: 'class',
      label: 'Class',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'admissionNo',
      label: 'Admission No.',
    },
  ];

  // students = [
  //   {
  //     name: 'Aarav Sharma',
  //     class: 'Class 8',
  //     status: 'Active',
  //     admissionNo: 'ADM-001',
  //   },
  //   {
  //     name: 'Anaya Patil',
  //     class: 'Class 7',
  //     status: 'Active',
  //     admissionNo: 'ADM-002',
  //   },
  // ];

  students: any[] = [
    {
      id: 1,
      name: 'Aarav Sharma',
      admissionNo: 'ADM-001',
      class: 'VIII',
      section: 'A',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Anaya Patil',
      admissionNo: 'ADM-002',
      class: 'VII',
      section: 'B',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Rahul Joshi',
      admissionNo: 'ADM-003',
      class: 'VIII',
      section: 'A',
      status: 'Inactive',
    },
  ];

  studentColumns: TableColumn[] = [
    {
      key: 'name',
      label: 'Student',
      sortable: true,
      visible: true,
    },
    {
      key: 'admissionNo',
      label: 'Admission No.',
      sortable: true,
      visible: true,
    },
    {
      key: 'class',
      label: 'Class',
      sortable: true,
      visible: true,
    },
    {
      key: 'section',
      label: 'Section',
      visible: true,
    },
    {
      key: 'status',
      label: 'Status',
      visible: true,
    },
  ];

  constructor(private readonly toast: ToastService) {}

  ngOnInit() {
    // this.saveStudent();
  }

  onSelectionChange(rows: Student[]): void {
    console.log('Selected:', rows);
  }

  onSort(event: any) {
    throw new Error('Method not implemented.');
  }
  onStudentClick($event: {
    name: string;
    class: string;
    status: string;
    admissionNo: string;
  }) {
    throw new Error('Method not implemented.');
  }

  saveStudent(): void {
    // API call...

    this.toast.success('Student created successfully.');

    this.toast.error('Unable to save student.');

    this.toast.warning('This student is already registered.');

    this.toast.info('Attendance has been updated.');

    this.toast.loading('Saving student...');

    this.toast.success('Student has been created successfully.', {
      title: 'Toast with Title - Student Created',
    });

    this.toast.success('Profile updated successfully.', {
      duration: 30000,
    });

    this.toast.error('Persistent toast', {
      duration: 0,
    });

    this.toast.warning('Student has been moved to the archive.', {
      title: 'Student Archived',
      actionLabel: 'Undo',
      onAction: () => {
        console.log('Undo archive');
      },
    });

    this.toast.success('Toast with Different position - bottom-right', {
      position: 'bottom-left',
    });
  }

  onMenuItemSelected(item: MenuItem): void {
    switch (item.value) {
      case 'edit':
        this.edit();
        break;

      case 'duplicate':
        this.duplicate();
        break;

      case 'delete':
        this.delete();
        break;
    }
  }
  delete() {
    throw new Error('Method not implemented.');
  }
  duplicate() {
    throw new Error('Method not implemented.');
  }
  edit() {
    throw new Error('Method not implemented.');
  }

  openConfirmDialog() {
    this.showDialog = true;
  }

  openConfirmDialogDelete() {
    this.showDeleteDialog = true;
  }

  deleteStudent() {
    throw new Error('Method not implemented.');
  }

  deactivateStudent() {
    throw new Error('Method not implemented.');
  }

  onSearch(value: string): void {
    console.log('Searching:', value);
  }

  onAlertDismissed() {
    throw new Error('Method not implemented.');
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

  studentDropdownActions: DropdownItem[] = [
    {
      label: 'View',
      value: 'view',
      icon: 'add',
    },
    {
      label: 'Edit',
      value: 'edit',
      icon: 'edit',
    },
    {
      label: 'Delete',
      value: 'delete',
      icon: 'delete',
      danger: true,
    },
  ];

  studentActions: TableAction[] = [
    {
      label: 'View',
      value: 'view',
      icon: 'add',
    },
    {
      label: 'Edit',
      value: 'edit',
      icon: 'edit',
    },
    {
      label: 'Delete',
      value: 'delete',
      icon: 'delete',
      variant: 'danger',
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
