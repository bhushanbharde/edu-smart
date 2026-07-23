import { SidebarMenuItem } from '../models/sidebar-menu-item.model';

export const STUDENT_MENU: SidebarMenuItem[] = [
  {
    id: 'students',

    title: 'Students',

    icon: 'graduation-cap',

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

        icon: 'user-plus',

        route: '/students/create',
      },

      {
        id: 'student-promote',

        title: 'Promote Student',

        icon: 'arrow-up',

        route: '/students/promote',
      },
    ],
  },
];
