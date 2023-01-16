import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input('color') color!: String;
  @Input('n') n!: String;
  @Input('icon') icon!: String;
  @Input('title') title!: String;
  @Input('body') body!: String;
}
