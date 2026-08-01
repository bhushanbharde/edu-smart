import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { StepperItem } from './stepper.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-stepper',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  @Input() steps: StepperItem[] = [];

  @Input() currentStep = 0;

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input() clickable = true;

  @Output() stepChange = new EventEmitter<number>();

  isCompleted(index: number): boolean {
    return index < this.currentStep;
  }

  isActive(index: number): boolean {
    return index === this.currentStep;
  }

  isDisabled(step: StepperItem, index: number): boolean {
    return (
      step.disabled === true || (!this.clickable && index !== this.currentStep)
    );
  }

  selectStep(step: StepperItem, index: number): void {
    if (this.isDisabled(step, index)) {
      return;
    }

    this.stepChange.emit(index);
  }

  trackByStep(index: number, step: StepperItem): string {
    return `${index}-${step.label}`;
  }
}
