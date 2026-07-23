import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { IconColor, IconSize } from './icon.types';

@Component({
  selector: 'erp-icon',
  standalone: true,
  imports: [NgClass, LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true })
  name!: string;

  @Input()
  size: IconSize = 'md';

  @Input()
  color: IconColor = 'inherit';

  @Input()
  strokeWidth = 2;
}
