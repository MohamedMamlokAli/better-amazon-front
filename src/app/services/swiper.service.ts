import { Injectable } from '@angular/core';
import { HomeCategories } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {
  categories: HomeCategories[] = [
    {
      categoryName: 'Computers',
      categoryImage: 'assets/Computers.png',
    },
    {
      categoryName: 'Consoles',
      categoryImage: 'assets/consoles.png',
    },
    {
      categoryName: 'Toys & Games',
      categoryImage: 'assets/toys.png',
    },
    {
      categoryName: 'Computers',
      categoryImage: 'assets/Computers.png',
    },
    {
      categoryName: 'Computers',
      categoryImage: 'assets/Computers.png',
    },
  ];
  accesories: HomeCategories[] = [
    {
      categoryName: 'Headsets',
      categoryImage: 'assets/headset.png',
    },
    {
      categoryName: 'Keyboard',
      categoryImage: 'assets/keyboard.png',
    },
    {
      categoryName: 'Mouse',
      categoryImage: 'assets/mouse.png',
    },
    {
      categoryName: 'Chair',
      categoryImage: 'assets/chair.png',
    },
    {
      categoryName: 'Controller',
      categoryImage: 'assets/controller.png',
    },
  ];
  constructor() {}
  get getHomeCategories() {
    return this.categories;
  }
  get getAccesories() {
    return this.accesories;
  }
}
