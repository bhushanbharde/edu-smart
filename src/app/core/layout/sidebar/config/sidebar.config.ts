import { SidebarSection } from '../models/sidebar-section.model';

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: 'main',
    title: 'Main',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
      },
      {
        id: 'analytics',
        title: 'Analytics',
        icon: 'analytics',
        route: '/analytics',
      },
    ],
  },

  {
    id: 'academics',
    title: 'Academics',
    items: [
      {
        id: 'students',
        title: 'Students',
        icon: 'users',
        children: [
          {
            id: 'student-list',
            title: 'Student List',
            icon: 'user',
            route: '/students',
          },
          {
            id: 'admissions',
            title: 'Admissions',
            icon: 'personAdd',
            route: '/students/admissions',
          },
          {
            id: 'alumni',
            title: 'Alumni',
            icon: 'students',
            route: '/students/alumni',
          },
        ],
      },

      {
        id: 'teachers',
        title: 'Teachers',
        icon: 'teacher',
        route: '/teachers',
      },

      {
        id: 'classes',
        title: 'Classes',
        icon: 'classes',
        route: '/classes',
      },

      {
        id: 'subjects',
        title: 'Subjects',
        icon: 'homework',
        route: '/subjects',
      },

      {
        id: 'attendance',
        title: 'Attendance',
        icon: 'attendance',
        route: '/attendance',
      },

      {
        id: 'timetable',
        title: 'Timetable',
        icon: 'timetable',
        route: '/timetable',
      },

      {
        id: 'exams',
        title: 'Exams',
        icon: 'assignments',
        route: '/exams',
      },

      {
        id: 'results',
        title: 'Results',
        icon: 'grades',
        route: '/results',
      },
    ],
  },

  {
    id: 'finance',
    title: 'Finance',
    items: [
      {
        id: 'fees',
        title: 'Fee Management',
        icon: 'fees',
        route: '/fees',
      },
      {
        id: 'payments',
        title: 'Payments',
        icon: 'accounting',
        route: '/payments',
      },
      {
        id: 'expenses',
        title: 'Expenses',
        icon: 'expenses',
        route: '/expenses',
      },
      {
        id: 'scholarships',
        title: 'Scholarships',
        icon: 'scholarship',
        route: '/scholarships',
      },
    ],
  },

  {
    id: 'communication',
    title: 'Communication',
    items: [
      {
        id: 'notice-board',
        title: 'Notice Board',
        icon: 'noticeBoard',
        route: '/notices',
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: 'message',
        route: '/messages',
      },
      {
        id: 'email',
        title: 'Email',
        icon: 'mail',
        route: '/email',
      },
      {
        id: 'sms',
        title: 'SMS',
        icon: 'sms',
        route: '/sms',
      },
    ],
  },

  {
    id: 'reports',
    title: 'Reports',
    items: [
      {
        id: 'student-report',
        title: 'Student Reports',
        icon: 'studentReport',
        route: '/reports/students',
      },
      {
        id: 'attendance-report',
        title: 'Attendance Reports',
        icon: 'analytics',
        route: '/reports/attendance',
      },
      {
        id: 'fee-report',
        title: 'Fee Reports',
        icon: 'fees',
        route: '/reports/fees',
      },
      {
        id: 'academic-report',
        title: 'Academic Reports',
        icon: 'grades',
        route: '/reports/academic',
      },
    ],
  },

  {
    id: 'system',
    title: 'System',
    items: [
      {
        id: 'users',
        title: 'Users',
        icon: 'manageUsers',
        route: '/users',
      },
      {
        id: 'roles',
        title: 'Roles',
        icon: 'roles',
        route: '/roles',
      },
      {
        id: 'departments',
        title: 'Departments',
        icon: 'department',
        route: '/departments',
      },
      {
        id: 'school-settings',
        title: 'School Settings',
        icon: 'settings',
        route: '/settings',
      },
      {
        id: 'academic-year',
        title: 'Academic Year',
        icon: 'academicYear',
        route: '/academic-year',
      },
      {
        id: 'backup',
        title: 'Backup',
        icon: 'backup',
        route: '/backup',
      },
    ],
  },
];
