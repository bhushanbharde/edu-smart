import { NavigationItem } from '../models/navigation.model';

export const NAVIGATION: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard',
    route: '/dashboard',
  },

  {
    id: 'academic',
    label: 'Academic',
    icon: 'graduation-cap',

    children: [
      {
        id: 'students',
        label: 'Students',
        icon: 'users',
        route: '/students',
      },

      {
        id: 'teachers',
        label: 'Teachers',
        icon: 'users' ,
        route: '/teachers',
      },
    ],
  },

  {
    id: 'attendance',
    label: 'Attendance',
    icon: 'clipboard-check',
    route: '/attendance',
  },

  {
    id: 'fees',
    label: 'Fees',
    icon: 'wallet',
    route: '/fees',
  },

  {
    id: 'examinations',
    label: 'Examinations',
    icon: 'book-open',
    route: '/examinations',
  },

  {
    id: 'timetable',
    label: 'Timetable',
    icon: 'calendar-days',
    route: '/timetable',
  },

  {
    id: 'announcements',
    label: 'Announcements',
    icon: 'bell',
    route: '/announcements',
  },

  {
    id: 'reports',
    label: 'Reports',
    icon: 'bar-chart-3',
    route: '/reports',
  },

  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '/settings',
  },
];
