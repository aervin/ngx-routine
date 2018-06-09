import { TestBed, inject } from '@angular/core/testing';

import { NgxRoutineLibService } from './ngx-routine-lib.service';

describe('NgxRoutineLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxRoutineLibService]
    });
  });

  it('should be created', inject([NgxRoutineLibService], (service: NgxRoutineLibService) => {
    expect(service).toBeTruthy();
  }));
});
