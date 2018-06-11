import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxRoutineModule } from 'ngx-routine';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { MasterDetailPageModule } from './pages/master-detail/master-detail-page/master-detail-page.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

const PAGES = [MasterDetailPageModule];

@NgModule({
  declarations: [AppComponent],
  exports: [NgxRoutineModule],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxRoutineModule,
    ...PAGES,
    SharedComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
