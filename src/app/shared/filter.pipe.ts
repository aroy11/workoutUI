import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    // if (!items) return [];
    // if (!searchText) return items;
    // searchText = searchText.toLowerCase();
    // return items.filter(it => {
    //   return it.toLowerCase().includes(searchText);
    // });
    if (!items || !searchText) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Category_Name.indexOf(searchText) !== -1);
  }
}
