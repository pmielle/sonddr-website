import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, AfterViewInit {

  // attributes
  // --------------------------------------------
  goalIconWidth = 150;
  autoscrollSeconds = 5;
  autoscrollContainer?: HTMLElement;
  @ViewChild('autoscroll') autoscrollContainerRef?: ElementRef;
  goalIds = Array.from(Array(17).keys()).map(x => x + 1);
  email?: string;
  emailError = false;
  

  // lifecycle
  // --------------------------------------------
  constructor(public popup: PopupService) {
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.initAutoscroll();
  }


  // methods
  // --------------------------------------------
  initAutoscroll() {
    // find #autoscroll
    this.autoscrollContainer = this.autoscrollContainerRef?.nativeElement;
    if (!this.autoscrollContainer) {
      console.error("failed to start autoscroll: #autoscroll was not found");
      return;
    }
    // start autoscrolling
    setInterval(() => {
      let rewinded = this.rewindAutoscrollIfNeeded();
      if (rewinded) { return; }
      this.autoscrollContainer?.scrollBy({left: this.goalIconWidth, behavior: "smooth"});
    }, this.autoscrollSeconds * 1000);
  }

  onNewletterClick() {
    if (!this.email) {
      console.error("missing email");
      this.emailError = true;
      return;
    }
    this.popup.notImplemented();
    this.email = undefined;
  }

  rewindAutoscrollIfNeeded(): Boolean {
    let leftScroll = this.autoscrollContainer!.scrollLeft;
    let containerWidth = this.autoscrollContainer!.clientWidth;
    let scrollWidth = this.autoscrollContainer!.scrollWidth;
    if (leftScroll + containerWidth >= scrollWidth) {
      this.autoscrollContainer?.scrollTo({left: 0, behavior: "smooth"});
      return true;
    }
    return false;
  }

  onIosClick() {
    this.popup.notImplemented();
  }
  onAndroidClick() {
    this.popup.notImplemented();
  }
  onShareClick() {
    this.popup.notImplemented();
  }
}
