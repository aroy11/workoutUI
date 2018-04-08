import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/services/workout.service';
import { Workout } from '../shared/models/workout';
import { ApiService } from '../shared/services/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WorkoutService]
})
export class HomeComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  workouts: Array<Workout> = [];
  selectedWorkout: Workout = new Workout("", "", 0, 0, 0)
  workout = new Workout("", "", 0, 0, 0)
  newWorkoutName = "";
  searchText = "";
  editClicked: boolean = false;
  saveClicked: boolean = false;

  ngOnInit() {
    this.getWorkouts()
    this.loadPage();
  }

  loadPage() {
    this.getWorkouts();
    this.workout = new Workout("", "", 0, 0, 0)
    this.editClicked = false;
    this.saveClicked = false;
    this.newWorkoutName = "";
    this.searchText = "";
  }

  getWorkouts() {
    this.workoutService.getAll()
      .subscribe(x => {
        this.workouts = x;
      });
  }

  editWorkout(wrkt: Workout, editClckd: boolean) {
    if (this.editClicked == false) {
      this.saveClicked = false;
      this.editClicked = true;
    }
    else {
      this.saveClicked = true;
    }

    if (this.saveClicked == true) {

      this.workoutService.updateWorkout(this.selectedWorkout)
        .subscribe(x => {

        });
      this.saveClicked = false;
      this.editClicked = false;
      wrkt.Workout_Title = this.selectedWorkout.Workout_Title;
    }
    this.selectedWorkout.Workout_Id = wrkt.Workout_Id;
    this.selectedWorkout.Workout_Title = wrkt.Workout_Title;
    this.selectedWorkout.CaloriesBurntPerMinute = wrkt.CaloriesBurntPerMinute;
    this.selectedWorkout.Category_Id = wrkt.Category_Id;
    this.selectedWorkout.Workout_Note = wrkt.Workout_Note;

  }

  removeWorkoutFromCollection(workout: Workout, id: number) {
    const index: number = this.workouts.map(function (e) { return e.Workout_Id; }).indexOf(id);
    if (index !== -1) {
      this.workouts.splice(index, 1);
    }
  }

  deleteWorkout(workout: Workout) {
    this.workoutService.deleteWorkout(workout.Workout_Id)
      .subscribe(x => {
      });
    this.removeWorkoutFromCollection(workout, workout.Workout_Id);
  }
}
