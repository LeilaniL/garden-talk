import { Injectable } from '@angular/core';
import { Category } from './models/category-model';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

  showCategory(name) {
    for (let i = 0; i < 4; i++) {
      if (CATEGORIES[i].name === name) {
        return CATEGORIES[i];
      }
    }
  }
}
