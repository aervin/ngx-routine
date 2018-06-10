import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxRoutineModule } from 'ngx-routine';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxRoutineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
