import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Category[];
  constructor() {
    this.categories = [
      {
        id: 1,
        categoryName: 'Electronics',
        categoryOptions: [
          {
            option: 'Headphones',
          },
          {
            option: 'Laptops',
          },
          {
            option: 'Earpods',
          },
          {
            option: 'Computers',
          },
        ],
      },
      {
        id: 2,
        categoryName: 'Headphones',
        categoryOptions: [
          {
            option: 'Graphics Cards',
          },
          {
            option: 'Processors',
          },
          {
            option: 'RAMs',
          },
          {
            option: 'Power Supply',
          },
        ],
      },
      {
        id: 3,
        categoryName: 'Smart Homes',
        categoryOptions: [
          {
            option: 'Personal Assistant',
          },
          {
            option: 'Smart Lamps',
          },
        ],
      },
      {
        id: 4,
        categoryName: 'Arts&Crafts',
        categoryOptions: [
          {
            option: 'Paintings',
          },
          {
            option: 'Photos',
          },
          {
            option: 'Vases',
          },
        ],
      },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
