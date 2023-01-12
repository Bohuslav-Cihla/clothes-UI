import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/ui-models/invoice.model';
import { Product } from 'src/app/models/ui-models/product.model';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  invoiceId: string | null | undefined;

  product: Product = {
    id: '',
    number: 0,
    description: '',
    price: 0,
    shear: '',
    size: '',
    isSold: false,
    createdDate: '',
    createdBy: '',
    soldDate: '',
    soldBy: '',
    deletedDate: '',
    deletedBy: '',
    note: '',
    imageUrl: '',
    clothesType: {
      id: '',
      name: '',
      createdBy: '',
      createdDate: '',
      updatedBy: '',
      updateDate: '',
      deletedBy: '',
      deletedDate: ''
    },
    clothesTypeId: '',
    deliveryNoteId: '',
    deliveryNote:{
      number: 0,
      customerId: '',
      id: '',
      createdBy: '',
      createdDate: '',
      updatedBy: '',
      updateDate: '',
      deletedBy: '',
      deletedDate: ''
    },
    invoice:{
      id: '',
      number: 0,
      createdDate: '',
      createdBy: '',
      dueDate: '',
      dateOfTaxPayment: '',
      isPaid: false,
      note: '',
      customer: {
        firstName: '',
        lastName: '',
        shopName: '',
        degree: '',
        ic: '',
        dic: '',
        phone: 0,
        email: '',
        web: '',
        country: '',
        city: '',
        zipCode: 0,
        street: '',
        streetNumber: '',
        id: '',
        createdBy: '',
        createdDate: '',
        updatedBy: '',
        updateDate: '',
        deletedBy: '',
        deletedDate: ''
      },
      sum:0,
      products: []

    },
    invoiceId:'',
  };

  invoice: Invoice = {
    id: '',
      number: 0,
      createdDate: '',
      createdBy: '',
      dueDate: '',
      dateOfTaxPayment: '',
      isPaid: false,
      note: '',
      customer: {
        firstName: '',
        lastName: '',
        shopName: '',
        degree: '',
        ic: '',
        dic: '',
        phone: 0,
        email: '',
        web: '',
        country: '',
        city: '',
        zipCode: 0,
        street: '',
        streetNumber: '',
        id: '',
        createdBy: '',
        createdDate: '',
        updatedBy: '',
        updateDate: '',
        deletedBy: '',
        deletedDate: ''
      },
      sum:0,
      products: []
  };

  productList: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router,
    private readonly invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
      this.invoiceId = params.get('id');

      if(this.invoiceId)
      {
        this.invoiceService.getInvoice(this.invoiceId)
            .subscribe(
              (successResponse) => {
                this.invoice = successResponse;
                console.log(successResponse)
              },
              (errorResponse) => {
                console.log(errorResponse)
              }
            );
      }
    })

    


  }

}
