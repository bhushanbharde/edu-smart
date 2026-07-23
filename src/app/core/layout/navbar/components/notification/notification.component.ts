import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'erp-notification-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  readonly notifications = signal<NotificationItem[]>([
    {
      id: 1,
      title: 'New Admission',
      message: 'A new student admission request has been submitted.',
      time: '5 min ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Fee Payment',
      message: 'Rahul Sharma paid ₹25,000.',
      time: '20 min ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Exam Schedule',
      message: 'Exam timetable has been published.',
      time: 'Yesterday',
      unread: false,
    },
  ]);
}
