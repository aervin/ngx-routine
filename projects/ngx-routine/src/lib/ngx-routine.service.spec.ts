import { TestBed, inject } from '@angular/core/testing';

import { NgxRoutineService } from './ngx-routine.service';

describe('NgxRoutineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxRoutineService]
    });
  });

  it('should be created', inject([NgxRoutineService], (service: NgxRoutineService) => {
    expect(service).toBeTruthy();
  }));
});
