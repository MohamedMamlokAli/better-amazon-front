import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product, Response } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts = (filter: any): Observable<Response> => {
    return this.http.get<Response>('http://localhost:5000/api/v1/products', {
      params: filter,
    });
  };
  getProduct(id: string): Observable<{ product: Product }> {
    return this.http.get<{ product: Product }>(
      `http://localhost:5000/api/v1/products/${id}`
    );
  }
}
