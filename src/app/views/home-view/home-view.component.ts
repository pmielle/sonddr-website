import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  onIosClick() {
    console.log("ios click...");
  }
  onAndroidClick() {
    console.log("android click...");
  }
  onShareClick() {
    console.log("share click...");
  }
}
