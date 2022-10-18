import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating!: number;
  yellow: number[] = [];
  gray: number[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.rating);

    for (let i = 0; i < Math.floor(this.rating); i++) {
      this.yellow.push(i);
    }
    for (let i = 0; i < 5 - Math.floor(this.rating); i++) {
      this.gray.push(i);
    }
  }
}
