import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRoutineLibModule } from 'ngx-routine-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRoutineLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
