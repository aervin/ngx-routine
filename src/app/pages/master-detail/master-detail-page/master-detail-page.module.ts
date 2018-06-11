import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxRoutineModule } from 'ngx-routine';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DemoMasterDetailBasicComponent } from '../master-detail-demos/demo-master-detail-basic/demo-master-detail-basic.component';
import { MasterDetailPageComponent } from './master-detail-page.component';

@NgModule({
  declarations: [MasterDetailPageComponent, DemoMasterDetailBasicComponent],
  imports: [HttpClientModule, NgxRoutineModule, SharedComponentsModule]
})
export class MasterDetailPageModule {}
