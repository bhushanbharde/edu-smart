import {

    LayoutDashboard,
    GraduationCap,
    Users,
    ClipboardCheck,
    Wallet,
    BookOpen,
    CalendarDays,
    Bell,
    BarChart3,
    Settings

} from 'lucide-angular';

import { NavigationItem } from '../models/navigation.model';

export const NAVIGATION: NavigationItem[] = [

    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        route: '/dashboard'
    },

    {
        id: 'academic',
        label: 'Academic',
        icon: GraduationCap,

        children: [

            {
                id: 'students',
                label: 'Students',
                icon: Users,
                route: '/students'
            },

            {
                id: 'teachers',
                label: 'Teachers',
                icon: Users,
                route: '/teachers'
            }

        ]

    },

    {
        id: 'attendance',
        label: 'Attendance',
        icon: ClipboardCheck,
        route: '/attendance'
    },

    {
        id: 'fees',
        label: 'Fees',
        icon: Wallet,
        route: '/fees'
    },

    {
        id: 'examinations',
        label: 'Examinations',
        icon: BookOpen,
        route: '/examinations'
    },

    {
        id: 'timetable',
        label: 'Timetable',
        icon: CalendarDays,
        route: '/timetable'
    },

    {
        id: 'announcements',
        label: 'Announcements',
        icon: Bell,
        route: '/announcements'
    },

    {
        id: 'reports',
        label: 'Reports',
        icon: BarChart3,
        route: '/reports'
    },

    {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        route: '/settings'
    }

];