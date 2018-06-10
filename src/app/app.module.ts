import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRoutineModule } from 'ngx-routine';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRoutineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
