import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutineMasterDetailDetailComponent } from './components/routine-master-detail-detail/routine-master-detail-detail.component';
import { RoutineMasterDetailMasterListItemComponent } from './components/routine-master-detail-master-list-item/routine-master-detail-master-list-item.component';
import { RoutineMasterDetailComponent } from './routine-master-detail.component';

@NgModule({
  declarations: [
    RoutineMasterDetailComponent,
    RoutineMasterDetailDetailComponent,
    RoutineMasterDetailMasterListItemComponent
  ],
  imports: [CommonModule],
  exports: [RoutineMasterDetailComponent]
})
export class RoutineMasterDetailModule {}
