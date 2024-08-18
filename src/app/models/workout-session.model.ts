import { Exercise } from './exercise.model';
import { AddedSetExercise, SetExercise } from './set.model';

export interface WorkoutSession {
  id: number;
  title: string;
  duration: number;
  date: Date;
  exercises: Exercise[] | null;
}

export interface CreateWorkoutSessionWithExercisesRequest {
  title: string;
  duration: number;
  date: Date;
  name: string;
  sets: SetExercise[];
}
