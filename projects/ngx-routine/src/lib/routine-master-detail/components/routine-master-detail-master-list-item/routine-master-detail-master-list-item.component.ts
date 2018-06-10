import { Component, Input } from '@angular/core';

@Component({
  selector: 'routine-master-detail-master-list-item',
  templateUrl: './routine-master-detail-master-list-item.component.html',
  styleUrls: ['./routine-master-detail-master-list-item.component.css']
})
export class RoutineMasterDetailMasterListItemComponent {
  @Input() public data: { id: string; displayValue: string };
}
