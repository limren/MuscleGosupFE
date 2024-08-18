import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { AddedExercise, Exercise } from '../../../models/exercise.model';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddedSetExercise } from '../../../models/set.model';

@Component({
  selector: 'app-create-exercise-popup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-exercise-popup.component.html',
  styleUrl: './create-exercise-popup.component.css',
})
export class CreateExercisePopupComponent {
  @Output() addExerciseEvent = new EventEmitter<AddedExercise>();
  @Output() isActive = new EventEmitter<boolean>(false);

  constructor(private formBuilder: FormBuilder) {}

  exerciseFormGroup = this.formBuilder.group({
    name: '',
  });

  setFormGroup = this.formBuilder.group({
    reps: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true,
    }),
    weight: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true,
    }),
  });

  exercise: AddedExercise = {
    name: this.exerciseFormGroup.value.name || '',
    sets: [],
  };

  ngOnInit() {
    this.exerciseFormGroup.get('name')?.valueChanges.subscribe((value) => {
      this.exercise.name = value || '';
    });
  }

  onSubmitSetForm() {
    if (this.setFormGroup.valid) {
      this.exercise.sets.push(this.setFormGroup.value as AddedSetExercise);
      this.setFormGroup.reset();
    }
  }

  onSubmitPopUp() {
    console.log('Emitted exercise : ', this.exercise);
    // I clone my object since in JS, objects are passed by refs and so emitting the object
    // keeps the connection between the child & parent. Therefore we must clone it to loose the connection.
    this.addExerciseEvent.emit({ ...this.exercise });
    this.cancel();
  }

  cancel() {
    this.isActive.emit(false);
    this.setFormGroup.reset();
    this.exerciseFormGroup.reset();
  }
}
