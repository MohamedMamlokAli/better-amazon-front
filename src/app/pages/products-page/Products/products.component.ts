import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  param!: Params;

  constructor(
    private ProductsService: ProductsService,
    private ActiveRoute: ActivatedRoute,
    private menuService: MenuService
  ) {
    this.ActiveRoute.params.subscribe((data) => (this.param = data));
  }

  ngOnInit(): void {
    this.menuService.setMenu = 'products';
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
  ngOnDestroy() {
    console.log('destroyed');
  }
}
