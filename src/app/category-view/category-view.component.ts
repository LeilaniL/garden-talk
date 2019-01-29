import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category-model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  providers: [CategoryService]
})
export class CategoryViewComponent implements OnInit {
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
  // goToDetailPage(clickedAlbum: Album) {
  //   this.router.navigate(['albums', clickedAlbum.id]);
  // };

}
