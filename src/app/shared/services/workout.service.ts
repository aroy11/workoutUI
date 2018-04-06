import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';
import { Workout } from '../models/workout';


@Injectable()
export class WorkoutService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Workout[]> {
    return this.apiService.get(`/GetWorkouts`)
      .pipe(map(response => <Workout[]>response));
  }
}