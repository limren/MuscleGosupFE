export interface WorkoutSession {
  id: Number;
  title: String;
  duration: Number;
  date: Date;
  exercises: Exercise[] | null;
}

interface Exercise {
  id: Number;
  name: String;
  sets: Set[];
}

interface Set {
  id: Number;
  reps: Number;
  weight: Number;
}
