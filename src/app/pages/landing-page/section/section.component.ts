import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Swiper,
  Scrollbar,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Scrollbar]);

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionComponent implements OnInit {
  @Input() section_title: string = '';
  slides$ = new BehaviorSubject<string[]>(['']);
  slidesPerView: number = 1.5;
  activeIndex: number = 0;
  constructor() {
    if (window.innerWidth >= 768) {
      this.slidesPerView = 3.5;
    }
    if (window.innerWidth >= 1024) {
      this.slidesPerView = 4.5;
    }
  }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 20 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
  ngOnChange() {
    if (window.innerWidth >= 768) {
      this.slidesPerView = 3.5;
      console.log(window.innerWidth);
    }
    if (window.innerWidth >= 1024) {
      this.slidesPerView = 4.5;
      console.log(window.innerWidth);
    }
  }
  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      this.slidesPerView = 1.5;
    }
    if (event.target.innerWidth >= 768) {
      this.slidesPerView = 3.5;
    }
    if (event.target.innerWidth >= 1024) {
      this.slidesPerView = 4.5;
    }
  }
  onSwipe(e: [Swiper]) {
    this.activeIndex = e[0].activeIndex;
    console.log(this.activeIndex);
  }
}
