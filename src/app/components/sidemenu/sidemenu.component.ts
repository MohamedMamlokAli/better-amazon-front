import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => console.log(param));
  }

  ngOnInit(): void {}
}
