import {
  Component,
  Input,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="g">
        <!-- <button (click)="o.update((v) => !v)">{{ title }}</button> -->
        <div *ngIf="o()"><ng-content /></div>
    </div>`,
  styles: [
    `
      .g button {
        width: 100%;
        text-align: left;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
    
export class SidebarGroupComponent {
  @Input() title = '';
  o = signal(true);
}
