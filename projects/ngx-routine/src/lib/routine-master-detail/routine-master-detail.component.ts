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
  @Input() public dataSource: any[];
  @Input() public discriminator = 'id';
  @Input() public displayProperty = 'id';
  @Input() public detailTemplate: TemplateRef<any>;

  public masterListDisplayData: string[] | number[] = [];
  public detailData: any | undefined;

  public ngOnInit(): void {
    this.masterListDisplayData = initMasterListData(
      this.dataSource,
      this.discriminator,
      this.displayProperty
    );
  }

  public handleMasterListItemSelection(item: IdDisplayValuePair): void {
    this.detailData = {
      $implicit: this.dataSource.find((data) => data[this.discriminator] === item.id)
    };
  }
}

function initMasterListData(data: any[], discriminator: string, displayProperty: string): any[] {
  return data.map((obj) => {
    return { id: obj[discriminator], displayValue: obj[displayProperty] };
  });
}
