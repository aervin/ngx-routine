import { Component, Input } from '@angular/core';

@Component({
  selector: 'routine-master-detail-detail',
  templateUrl: './routine-master-detail-detail.component.html',
  styleUrls: ['./routine-master-detail-detail.component.css']
})
export class RoutineMasterDetailDetailComponent {
  @Input() public data: any;
}
