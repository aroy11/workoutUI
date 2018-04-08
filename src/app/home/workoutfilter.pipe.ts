import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../shared/models/workout';

@Pipe({
  name: 'workoutFilter'
})
export class WorkoutfilterPipe implements PipeTransform {

  transform(items: Workout[], searchText: string): any[] {
 
    if (!items || !searchText) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Workout_Title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
