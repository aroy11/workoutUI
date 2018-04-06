import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';
import { Workout } from '../models/workout';
import { Category } from '../models/category';


@Injectable()
export class CategoryService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Category[]> {
    return this.apiService.get(`/Categories`)
      .pipe(map(response => <Category[]>response));
  }

  updateCategory(category: Category){
    return this.apiService.put(`/Categories`,category);
  }
}