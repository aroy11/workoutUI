import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
  providers: [CategoryService]
})
export class AddcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category: Category = new Category(0, "");
  editClicked: boolean = false;
  saveClicked: boolean = false;

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.getCategory();
    this.category = new Category(0, "")
    this.editClicked = false;
    this.saveClicked = false;
  }

  categories: Array<Category> = [];
  selectedCategory: Category = new Category(0, "");



  getCategory() {
    this.categoryService.getAll()
      .subscribe(x => {
        this.categories = x;
      });
  }
  editCategory(catgry: Category, editClckd: boolean) {
    if (this.editClicked == false) {
      this.saveClicked = false;
    }
    else {
      this.saveClicked = true;
      this.editClicked = false;
    }
    this.editClicked = true;

    if(this.saveClicked == true){
      this.categoryService.updateCategory(catgry)
      .subscribe(x => {
        this.categories = x;
      });
      //this.getCategory();
      this.saveClicked = false;
    }
    this.selectedCategory.Category_Id = catgry.Category_Id;
    this.selectedCategory.Category_Name = catgry.Category_Name;

  }
}
