import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `<a [routerLink]="route" routerLinkActive="active">{{ label }}</a>`,
  styles: [
    `
      a {
        display: block;
        padding: 12px;
        border-radius: 8px;
        text-decoration: none;
      }
      .active {
        font-weight: 600;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent {
  @Input() label = '';
  @Input() route = '';
}
