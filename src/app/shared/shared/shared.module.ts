import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from 'src/app/components/stars/stars.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [StarsComponent, CategoriesComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [StarsComponent, CategoriesComponent],
})
export class SharedModule {}
