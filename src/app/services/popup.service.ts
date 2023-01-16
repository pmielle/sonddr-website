import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private snack: MatSnackBar) { }

  error(message: string) {
    this.snack.open(message, undefined, { duration: 5000 });
  }

  notImplemented() {
    this.error("🤧 not implemented yet");
  }
}
