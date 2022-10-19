import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  @Input() rating!: number;
  yellow: number[] = [];
  gray: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < Math.floor(this.rating); i++) {
      this.yellow.push(i);
    }
    for (let i = 0; i < 5 - Math.floor(this.rating); i++) {
      this.gray.push(i);
    }
  }
}
