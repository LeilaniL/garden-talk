import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category-model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  providers: [CategoryService]
})
export class CategoryViewComponent implements OnInit {
  categoryName: string;
  selectedCategory: Category;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) { }

  ngOnInit() {
    console.log("category-view ngOnInit called");
    this.route.params.forEach((urlParameters) => {
      this.categoryName = (urlParameters['name']);
    })
    this.selectedCategory = this.categoryService.showCategory(this.categoryName)
  }
}
