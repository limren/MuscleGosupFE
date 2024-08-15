import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSessionsBoardComponent } from './workout-sessions-board.component';

describe('WorkoutSessionsBoardComponent', () => {
  let component: WorkoutSessionsBoardComponent;
  let fixture: ComponentFixture<WorkoutSessionsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutSessionsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutSessionsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
