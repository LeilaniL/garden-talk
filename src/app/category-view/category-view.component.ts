import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category-model';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  providers: [CategoryService]
})
export class CategoryViewComponent implements OnInit {
  categoryName: string;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryName = (urlParameters['name']);
    })
  }
}
