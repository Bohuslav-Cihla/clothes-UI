import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothesType } from '../models/api-models/clothesType.model';

@Injectable({
  providedIn: 'root'
})
export class ClothesTypeService {

  private baseApiUrl = 'https://localhost:44380';

  constructor(private httpClient: HttpClient) { }

  getAllClothesType(): Observable<ClothesType[]>{
    return this.httpClient.get<ClothesType[]>(this.baseApiUrl + '/api/ClothesType/GetAllClothesType');
  }

}
