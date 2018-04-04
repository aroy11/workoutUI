import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/services/workout.service';
import { Workout } from '../shared/models/workout';
import { ApiService } from '../shared/services/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WorkoutService, ApiService]
})
export class HomeComponent implements OnInit {

  constructor( private workoutsService: WorkoutService) { }


  workouts: Array<Workout> = [];

  ngOnInit() {
    this.workoutsService.getAll()
    .subscribe(workouts => {
      this.workouts = workouts;
    });
  }
}
