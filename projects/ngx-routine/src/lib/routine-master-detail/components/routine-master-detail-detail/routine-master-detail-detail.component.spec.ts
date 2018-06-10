import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineMasterDetailDetailComponent } from './routine-master-detail-detail.component';

describe('RoutineMasterDetailDetailComponent', () => {
  let component: RoutineMasterDetailDetailComponent;
  let fixture: ComponentFixture<RoutineMasterDetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineMasterDetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineMasterDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
