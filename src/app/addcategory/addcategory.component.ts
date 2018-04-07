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
    this.newCategoryName = "";
    this.searchText = "";
  }

  categories: Array<Category> = [];
  selectedCategory: Category = new Category(0, "");
  newCategoryName = "";
  searchText = "";

  getCategory() {
    this.categoryService.getAll()
      .subscribe(x => {
        this.categories = x;
      });
  }

  addCategory(categoryName: string) {
    var cat = new Category(0, categoryName);
    this.categoryService.addCategory(cat)
      .subscribe(x => {
        cat.Category_Id = x.Category_Id;
        this.categories.push(cat);
        this.newCategoryName = "";
      });
  }

  editCategory(catgry: Category, editClckd: boolean) {
    if (this.editClicked == false) {
      this.saveClicked = false;
      this.editClicked = true;
    }
    else {
      this.saveClicked = true;
    }

    if (this.saveClicked == true) {

      this.categoryService.updateCategory(this.selectedCategory)
        .subscribe(x => {

        });
      this.saveClicked = false;
      this.editClicked = false;
      catgry.Category_Name = this.selectedCategory.Category_Name;
    }
    this.selectedCategory.Category_Id = catgry.Category_Id;
    this.selectedCategory.Category_Name = catgry.Category_Name;

  }

  removeCategoryFromCollection(category: Category, id: number) {
    const index: number = this.categories.map(function (e) { return e.Category_Id; }).indexOf(id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category.Category_Id)
      .subscribe(x => {
      });
    this.removeCategoryFromCollection(category, category.Category_Id);
  }
}
