import { NgModule } from '@angular/core';
import { RoutineMasterDetailModule } from './routine-master-detail/routine-master-detail.module';

@NgModule({
  imports: [RoutineMasterDetailModule],
  exports: [RoutineMasterDetailModule]
})
export class NgxRoutineModule {}
