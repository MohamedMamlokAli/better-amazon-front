import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuVariant = '';
  constructor() {}
  get getMenu(): string {
    return this.menuVariant;
  }
  set setMenu(route: string) {
    this.menuVariant = route;
  }
}
