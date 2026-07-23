import { Injectable, computed, signal } from '@angular/core';
import { Notification } from '../models/notification.model';

@Injectable({

    providedIn: 'root'

})

export class NotificationStore {

    readonly notifications =

        signal<Notification[]>([]);

    readonly unreadCount = computed(

        () => this.notifications()

            .filter(v => !v.read)

            .length

    );

    setNotifications(

        notifications: Notification[]

    ) {

        this.notifications.set(

            notifications

        );

    }

    markAsRead(id: number) {

        this.notifications.update(

            items =>

                items.map(item =>

                    item.id === id

                        ? {

                            ...item,

                            read: true

                        }

                        : item

                )

        );

    }

    clear() {

        this.notifications.set([]);

    }

}