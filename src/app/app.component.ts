import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuOpened = false;
  title = 'BetterAmazonFront';
  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    console.log(this.menuOpened);
  }
}
