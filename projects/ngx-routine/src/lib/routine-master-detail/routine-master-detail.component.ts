import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface IdDisplayValuePair {
  id: string;
  displayValue: string;
}

@Component({
  selector: 'routine-master-detail',
  templateUrl: './routine-master-detail.component.html',
  styleUrls: ['./routine-master-detail.component.scss']
})
export class RoutineMasterDetailComponent implements OnInit {

  /**
   * A user-supplied array; the component's primary data source
   * @default undefined
   * @memberof RoutineMasterDetailComponent
   */
  @Input() public dataSource: any[] | undefined;

  /**
   * When the user selects from the master list, we'll use this prop
   * to find the full object in the source array
   * @default 'id'
   * @memberof RoutineMasterDetailComponent
   */
  @Input() public discriminatorProperty = 'id';

  /**
   * For every object in the dataSource array, the prop whose value
   * should be used for display in the master list
   * @default 'id'
   * @memberof RoutineMasterDetailComponent
   */
  @Input() public displayProperty = 'id';


  /**
   * A user-supplied ng-template ref; we pass this ref a data
   * context--this.detailData--in routine-master-detail.component.html
   * @default undefined
   * @memberof RoutineMasterDetailComponent
   */
  @Input() public detailTemplate: TemplateRef<any>;

  public masterListDisplayData: IdDisplayValuePair[] = [];
  public detailData: any | undefined;

  public ngOnInit(): void {
    /* Maps source data into something more manageable for the master list */
    this.masterListDisplayData = this.dataSource.map((obj) => {
      return { id: obj[this.discriminatorProperty], displayValue: obj[this.displayProperty] };
    });
  }

  /**
   * When a master list item is selected, find its full object value and
   * update the detail template's data context
   * @memberof RoutineMasterDetailComponent
   */
  public handleMasterListItemSelection(item: IdDisplayValuePair): void {
    this.detailData = {
      $implicit: this.dataSource.find((data) => data[this.discriminatorProperty] === item.id)
    };
  }
}
