import { Injectable, signal } from '@angular/core';

import { NavbarNotification, NavbarProfile } from '../models/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  readonly profile = signal<NavbarProfile>({
    id: 1,
    name: 'Administrator',
    email: 'admin@school.com',
  });

  readonly notifications = signal<NavbarNotification[]>([]);

  readonly unreadCount = signal(0);

  setNotifications(notifications: NavbarNotification[]): void {
    this.notifications.set(notifications);

    this.unreadCount.set(notifications.filter((n) => !n.read).length);
  }
}
