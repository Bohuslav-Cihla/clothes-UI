import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice } from '../models/api-models/invoice.model';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[] = [];
  displayedColumns: string[] = ['number', 'Shop', 'createdDate', 'dueDate', 'isPaid', 'sum', 'edit'];
  dataSource: MatTableDataSource<Invoice> = new MatTableDataSource<Invoice>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    // Fetch Products
    this.invoiceService.getAllInvoices()
    .subscribe(
      (successResponse) => {
        this.invoices = successResponse;
        this.dataSource = new MatTableDataSource<Invoice>(this.invoices);

        if(this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }

        if(this.matSort){
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  filterInvoices(){
      this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}
