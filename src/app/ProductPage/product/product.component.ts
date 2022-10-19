import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModule } from './product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  constructor(
    private ProductsService: ProductsService,
    private Active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Active.params.subscribe((data) => {
      this.ProductsService.getProduct(data['id']).subscribe(
        (data) => (this.product = data.product)
      );
    });
  }
}
