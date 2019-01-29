import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from '../app/category-view/category-view.component';


const appRoutes: Routes = [
    {
        path: 'categories/:name',
        component: CategoryViewComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);