import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input('color') color!: string;
  @Input('n') n!: string;
  @Input('icon') icon!: string;
  @Input('title') title!: string;
  @Input('body') body!: string;
}
