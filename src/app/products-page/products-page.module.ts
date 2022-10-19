import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Products/products.component';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, CardComponent],
  imports: [CommonModule, SwiperModule, SharedModule],
})
export class ProductsPageModule {}
