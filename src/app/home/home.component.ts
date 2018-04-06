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
  providers: [ WorkoutService]
})
export class HomeComponent implements OnInit {

  constructor( private workoutService: WorkoutService) { }

  workouts: Array<Workout> = [];

  ngOnInit() {
    
    this.workoutService.getAll()
    .subscribe(x => {
      this.workouts = x;
    });
  }
}
