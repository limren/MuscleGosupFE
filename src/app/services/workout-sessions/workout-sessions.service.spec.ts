import { TestBed } from '@angular/core/testing';

import { WorkoutSessionsService } from './workout-sessions.service';

describe('WorkoutSessionsService', () => {
  let service: WorkoutSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
