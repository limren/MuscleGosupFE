import { AddedSetExercise, SetExercise } from './set.model';

export interface Exercise extends AddedExercise {
  id: number;
  name: string;
  sets: SetExercise[];
}

export interface AddedExercise {
  name: string;
  sets: AddedSetExercise[];
}

export interface CreateExercise {
  workoutSessionId: number;
  name: string;
  sets: AddedSetExercise[];
}
