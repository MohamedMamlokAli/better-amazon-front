import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, SwiperModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
