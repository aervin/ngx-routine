import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineMasterDetailComponent } from './routine-master-detail.component';

describe('RoutineMasterDetailComponent', () => {
  let component: RoutineMasterDetailComponent;
  let fixture: ComponentFixture<RoutineMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
