import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExercisePopupComponent } from './create-exercise-popup.component';

describe('CreateExercisePopupComponent', () => {
  let component: CreateExercisePopupComponent;
  let fixture: ComponentFixture<CreateExercisePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExercisePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateExercisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
