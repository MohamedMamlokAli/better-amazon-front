import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product, Response } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  param!: Params;

  constructor(
    private ProductsService: ProductsService,
    private ActiveRoute: ActivatedRoute
  ) {
    this.ActiveRoute.params.subscribe((data) => (this.param = data));
  }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((data) => {
      this.param = data;
      this.ProductsService.getProducts({
        productCategory: this.param['category'],
      }).subscribe((result) => {
        this.products = result.data.products;
        console.log(this.products);
      });
    });
  }
}
