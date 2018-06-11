import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDetailPageComponent } from './pages/master-detail/master-detail-page/master-detail-page.component';

const routes: Routes = [
  {
    path: 'components/',
    component: MasterDetailPageComponent
  },
  {
    path: 'components/master-detail',
    component: MasterDetailPageComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
