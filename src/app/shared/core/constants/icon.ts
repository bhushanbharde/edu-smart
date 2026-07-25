export interface ErpIcon {
  readonly name: string;
}

export const ERP_ICONS = {
  dashboard: {
    name: 'dashboard',
  },

  home: {
    name: 'home',
  },

  menu: {
    name: 'menu',
  },

  search: {
    name: 'search',
  },

  notifications: {
    name: 'notifications',
  },

  settings: {
    name: 'settings',
  },

  logout: {
    name: 'logout',
  },

  student: {
    name: 'school',
  },

  teacher: {
    name: 'person',
  },

  parent: {
    name: 'groups',
  },

  attendance: {
    name: 'fact_check',
  },

  exams: {
    name: 'quiz',
  },

  timetable: {
    name: 'calendar_month',
  },

  homework: {
    name: 'assignment',
  },

  fees: {
    name: 'account_balance_wallet',
  },

  add: {
    name: 'add',
  },

  edit: {
    name: 'edit',
  },

  delete: {
    name: 'delete',
  },

  filter: {
    name: 'filter_list',
  },

  download: {
    name: 'download',
  },

  upload: {
    name: 'upload',
  },

  visibility: {
    name: 'visibility',
  },

  more: {
    name: 'more_vert',
  },

  chevronDown: {
    name: 'keyboard_arrow_down',
  },

  chevronUp: {
    name: 'keyboard_arrow_up',
  },

  chevronLeft: {
    name: 'keyboard_arrow_left',
  },

  chevronRight: {
    name: 'keyboard_arrow_right',
  },
} as const;
