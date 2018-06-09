import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRoutineLibComponent } from './ngx-routine-lib.component';

describe('NgxRoutineLibComponent', () => {
  let component: NgxRoutineLibComponent;
  let fixture: ComponentFixture<NgxRoutineLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRoutineLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRoutineLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
