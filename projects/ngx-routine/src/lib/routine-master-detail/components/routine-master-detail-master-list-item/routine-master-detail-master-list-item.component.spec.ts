import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineMasterDetailMasterListItemComponent } from './routine-master-detail-master-list-item.component';

describe('RoutineMasterDetailMasterListItemComponent', () => {
  let component: RoutineMasterDetailMasterListItemComponent;
  let fixture: ComponentFixture<RoutineMasterDetailMasterListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineMasterDetailMasterListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineMasterDetailMasterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
