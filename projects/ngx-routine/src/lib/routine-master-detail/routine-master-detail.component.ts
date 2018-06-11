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
  /* A user-supplied array; the component's primary data source */
  @Input() public dataSource: any[];

  /**
   * When the user selects from the master list, we'll use this prop
   * to find the full object in the source array
   */
  @Input() public discriminatorProperty = 'id';

  /* A property we should use for display in the master list */
  @Input() public displayProperty = 'id';

  /**
   * A user-supplied ng-template ref; we pass this ref a data
   * context--this.detailData--in routine-master-detail.component.html
   */
  @Input() public detailTemplate: TemplateRef<any>;

  public masterListDisplayData: string[] | number[] = [];
  public detailData: any | undefined;

  public ngOnInit(): void {
    this.masterListDisplayData = initMasterListData(
      this.dataSource,
      this.discriminatorProperty,
      this.displayProperty
    );
  }

  /* Reassign values to the detail template's data context */
  public handleMasterListItemSelection(item: IdDisplayValuePair): void {
    this.detailData = {
      $implicit: this.dataSource.find((data) => data[this.discriminatorProperty] === item.id)
    };
  }
}

/* Maps source data into something more manageable for the master list */
function initMasterListData(data: any[], discriminator: string, displayProperty: string): any[] {
  return data.map((obj) => {
    return { id: obj[discriminator], displayValue: obj[displayProperty] };
  });
}
