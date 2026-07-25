import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarMenuItem } from '../../models/sidebar-menu-item.model';

import { SidebarMenuItemComponent } from '../menu-item/menu-item.component';
import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'erp-sidebar-menu-group',
  standalone: true,
  imports: [CommonModule, SidebarMenuItemComponent, IconComponent],
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuGroupComponent {
  @Input({ required: true })
  item!: SidebarMenuItem;

  @Input()
  collapsed = false;

  @Output()
  navigate = new EventEmitter<void>();

  private readonly router = inject(Router);

  readonly expanded = signal(false);

  readonly isActive = computed(() => this.hasActiveChild(this.item));

  ngOnInit(): void {
    this.updateExpandedState();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateExpandedState();
      });
  }

  toggle(): void {
    if (this.collapsed) return;

    this.expanded.update((v) => !v);
  }

  private updateExpandedState(): void {
    if (this.hasActiveChild(this.item)) {
      this.expanded.set(true);
    }
  }

  private hasActiveChild(item: SidebarMenuItem): boolean {
    if (item.route && this.router.url.startsWith(item.route)) {
      return true;
    }

    return item.children?.some((child) => this.hasActiveChild(child)) ?? false;
  }

  onNavigate(): void {
    this.navigate.emit();
  }
}
