import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/api-models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private baseApiUrl = 'https://localhost:44380';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Invoice[]>{
    return this.httpClient.get<Invoice[]>(this.baseApiUrl + '/api/Invoice/GetAllInvoices');
  }
}
