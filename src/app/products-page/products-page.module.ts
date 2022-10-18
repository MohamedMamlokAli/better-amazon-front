import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Products/products.component';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ProductsComponent, CardComponent],
  imports: [CommonModule, SwiperModule],
})
export class ProductsPageModule {}
