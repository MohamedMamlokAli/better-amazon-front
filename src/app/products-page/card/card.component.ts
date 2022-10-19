import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: Product = {} as Product;
  constructor(private Router: Router, private Active: ActivatedRoute) {}

  ngOnInit(): void {}
  goToPage() {
    this.Router.navigateByUrl(
      `products/${this.Active.snapshot.params['category']}/${this.product._id}`
    );
    console.log(this.product._id);
    console.log(this.Active.snapshot.params);
  }
}
