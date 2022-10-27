import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryNote } from '../models/api-models/deliveryNote.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryNoteService {

  private baseApiUrl = 'https://localhost:44380';

  constructor(private httpClient: HttpClient) { }

  getAllDeliveryNote(): Observable<DeliveryNote[]>{
    return this.httpClient.get<DeliveryNote[]>(this.baseApiUrl + '/api/DeliveryNote/GetAllDeliveryNote');
  }

}
