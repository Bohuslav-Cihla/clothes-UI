import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductRequest } from '../models/api-models/addProductRequest.model';
import { Product } from '../models/api-models/product.model';
import { UpdateProductRequest } from '../models/api-models/updateProductRequest.model';

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

  updateProduct(productId: string, productRequest: Product): Observable<Product>{
    const updateProductRequest: UpdateProductRequest = {
      description: productRequest.description,
      price: productRequest.price,
      shear: productRequest.shear,
      size: productRequest.size,
      isSold: productRequest.isSold,
      soldDate: productRequest.soldDate,
      soldBy: productRequest.soldBy,
      deletedDate: productRequest.deletedDate,
      deletedBy: productRequest.deletedBy,
      note: productRequest.note,
      imageUrl: productRequest.imageUrl,
      clothesTypeId: productRequest.clothesTypeId,
      deliveryNoteId: productRequest.deliveryNoteId,
      invoiceId: productRequest.invoiceId,
    }

    let httpParams = new HttpParams();
    httpParams = httpParams.append('productId', productId);

    return this.httpClient.put<Product>(this.baseApiUrl + '/api/Product/UpdateProduct', updateProductRequest, {params:httpParams});
  }

  addProduct(productRequest: Product){

    const addProductRequest: AddProductRequest = {
      description: productRequest.description,
      price: productRequest.price,
      shear: productRequest.shear,
      size: productRequest.size,
      note: productRequest.note,
      clothesTypeId: "3de4a0ba-3ac8-4097-ab99-9dc6f08647c0",
    }
    return this.httpClient.post<Product>(this.baseApiUrl + '/api/Product/AddProduct', addProductRequest);
  }

  uploadImage(productId: string, file: File): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('productId', productId);

    const formData = new FormData();
    formData.append("productImage", file);

    return this.httpClient.post(this.baseApiUrl + '/api/Product/UploadImage', formData, {
      params:httpParams,
      responseType: 'text'
    });
  }

  getImagePath(relativePath: string){
    return `${this.baseApiUrl}/${relativePath}`;
  }
}
