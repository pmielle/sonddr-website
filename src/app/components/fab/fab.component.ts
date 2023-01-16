import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent {
  @Input('icon') icon!: String;
  @Input('color') color!: String;
}
