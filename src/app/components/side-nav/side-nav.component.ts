import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.show = true;
    }
  }
  toggleMenu() {
    this.show = !this.show;
    console.log(this.show);
  }
}