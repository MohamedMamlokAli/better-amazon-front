import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent implements OnInit {
  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
}
