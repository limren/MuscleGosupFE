import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkoutSession } from '../../models/workout-session.model';
import { WorkoutSessionsService } from '../../services/workout-sessions/workout-sessions.service';
import { CommonModule } from '@angular/common';
import { CreateExercisePopupComponent } from './create-exercise-popup/create-exercise-popup.component';
import { AddedExercise } from '../../models/exercise.model';
import { ExerciseService } from '../../services/exercise/exercise.service';

@Component({
  selector: 'app-workout-session',
  standalone: true,
  imports: [CommonModule, CreateExercisePopupComponent],
  templateUrl: './workout-session.component.html',
  styleUrl: './workout-session.component.css',
})
export class WorkoutSessionComponent {
  private route = inject(ActivatedRoute);
  workoutSession$!: Observable<WorkoutSession>;
  id: number = 0;
  addedExercises: AddedExercise[] = [];
  isExercisePopUpActive = false;

  constructor(
    private workoutSessionsService: WorkoutSessionsService,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.workoutSession$ = this.workoutSessionsService.getWorkoutSession(
        this.id
      );
    });
  }
  togglePopUpActive() {
    // TODO: handle state on close
    this.isExercisePopUpActive = !this.isExercisePopUpActive;
  }

  addExercise(exercise: AddedExercise) {
    console.log('Received exercise : ', exercise);
    this.addedExercises.push(exercise);
    this.exerciseService
      .createExercise({
        workoutSessionId: this.id,
        ...exercise,
      })
      .subscribe({
        next: (val) => console.log('val : ', val),
      });
  }

  handleIsActivePopUp(isActive: boolean) {
    this.isExercisePopUpActive = isActive;
  }
}
