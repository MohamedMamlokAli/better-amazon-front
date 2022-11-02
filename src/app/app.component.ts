import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  menuOpened = false;
  menuVariant = '';
  title = 'Damn';
  currentRoute: string = '/';
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private menuService: MenuService
  ) {
    this.menuVariant = this.menuService.getMenu;
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log('navigation ended', event.url.split('/'));
        this.currentRoute =
          event.url.split('/')[1] == '' ? '/' : event.url.split('/')[1];
        console.log(this.currentRoute);
      }
    });
  }
  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
  setActive(event: any) {
    console.log(event);
  }
  ngOnDestroy() {
    console.log('destroyed');
  }
}
