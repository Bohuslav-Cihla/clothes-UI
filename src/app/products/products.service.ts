import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/api-models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseApiUrl = 'https://localhost:44380';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseApiUrl + '/api/Product/GetAllProducts');
  }
}
