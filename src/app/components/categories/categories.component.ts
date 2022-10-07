import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  categoryPicked: boolean = false;
  category: number = 0;
  constructor(private CategoriesService: CategoriesService) {
    this.categories = this.CategoriesService.getCategories();
  }

  ngOnInit(): void {
    console.log(this.categories);
  }
  hovered(id: number) {
    if (id == this.category) {
      return this.unHovered();
    }
    this.category = id;
    this.categoryPicked = true;
  }
  unHovered() {
    this.category = 0;
    console.log(this.category);
    this.categoryPicked = false;

    console.log('unHovered');
  }
}
