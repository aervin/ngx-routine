import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMasterDetailBasicComponent } from './demo-master-detail-basic.component';

describe('DemoMasterDetailBasicComponent', () => {
  let component: DemoMasterDetailBasicComponent;
  let fixture: ComponentFixture<DemoMasterDetailBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMasterDetailBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMasterDetailBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
