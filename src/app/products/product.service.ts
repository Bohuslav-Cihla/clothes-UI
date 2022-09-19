import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/api-models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseApiUrl = 'https://localhost:44380';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseApiUrl + '/api/Product/GetAllProducts');
  }

  getProduct(productId: string): Observable<Product>{

    let httpParams = new HttpParams();
    httpParams = httpParams.append('productId', productId);
    
    return this.httpClient.get<Product>(this.baseApiUrl + '/api/Product/GetProductAsync', {params:httpParams});
  }
}
