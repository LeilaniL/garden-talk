import { Component, OnInit } from '@angular/core';
import { Category } from './models/category-model';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})
export class AppComponent implements OnInit {

  title: string = 'GardenTalk';
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  goToCategory(clickedCategory: Category) {
    console.log("goToCategory called");
    this.router.navigate(['categories', clickedCategory.name])
  }
}
