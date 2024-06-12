import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private snack: MatSnackBar) { }

  error(message: string) {
    this.snack.open(message, "Dismiss", { duration: 5000, horizontalPosition: 'start'});
  }

  notImplemented() {
    this.error("🤧 Coming soon!");
  }
}
