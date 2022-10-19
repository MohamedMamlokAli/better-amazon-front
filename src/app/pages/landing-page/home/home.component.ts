import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SwiperService } from 'src/app/services/swiper.service';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  slides$ = new BehaviorSubject<string[]>(['']);
  homeCategories;
  accesories;
  constructor(private categoriesSliders: SwiperService) {
    this.homeCategories = this.categoriesSliders.getHomeCategories;
    this.accesories = this.categoriesSliders.accesories;
  }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
}
