import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatTabsModule } from '@angular/material';
import { NgxRoutineModule } from 'ngx-routine';
import { ComponentDemoComponent } from './component-demo/component-demo.component';

const COMPONENTS = [ComponentDemoComponent];

@NgModule({
  imports: [CommonModule, MatCardModule, MatDividerModule, MatTabsModule, NgxRoutineModule],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class SharedComponentsModule {}
