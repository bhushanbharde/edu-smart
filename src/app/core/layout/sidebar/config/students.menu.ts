import { SidebarMenuItem } from '../models/sidebar-menu-item.model';

export const STUDENT_MENU: SidebarMenuItem[] = [
  {
    id: 'students',

    title: 'Students',

    icon: 'users',

    expanded: true,

    children: [
      {
        id: 'student-list',

        title: 'All Students',

        icon: 'users',

        route: '/students',
      },

      {
        id: 'student-create',

        title: 'Admission',

        icon: 'add',

        route: '/students/create',
      },

      {
        id: 'student-promote',

        title: 'Promote Student',

        icon: 'arrowUp',

        route: '/students/promote',
      },
    ],
  },
];
