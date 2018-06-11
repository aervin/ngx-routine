import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxRoutineModule } from 'ngx-routine';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { MasterDetailPageComponent } from './master-detail-page.component';

@NgModule({
  declarations: [MasterDetailPageComponent],
  imports: [HttpClientModule, NgxRoutineModule, SharedComponentsModule]
})
export class MasterDetailPageModule {}
