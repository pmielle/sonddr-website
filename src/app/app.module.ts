import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { MatRippleModule } from '@angular/material/core';
import { StepComponent } from './components/step/step.component';
import { MatIconModule } from '@angular/material/icon';
import { FabComponent } from './components/fab/fab.component';
import { FooterColumnComponent } from './components/footer-column/footer-column.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    StepComponent,
    FabComponent,
    FooterColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
