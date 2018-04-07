import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../shared/models/category';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(items: Category[], searchText: string): any[] {
 
    if (!items || !searchText) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Category_Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
