import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothesTypeService } from 'src/app/clothes-type/clothes-type.service';
import { DeliveryNoteService } from 'src/app/delivery-note/delivery-note.service';
import { InvoiceService } from 'src/app/invoices/invoice.service';
import { ClothesType } from 'src/app/models/ui-models/clothesType.model';
import { DeliveryNote } from 'src/app/models/ui-models/deliveryNote.model';
import { Invoice } from 'src/app/models/ui-models/invoice.model';
import { Product } from 'src/app/models/ui-models/product.model';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId: string | null | undefined;
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
      customer: ''
    },
    invoiceId:'',
  };

  isNewProduct = false;
  header = '';
  displayProductImageUrl ='';

  invoiceList: Invoice[] = [];
  clothesTypeList: ClothesType[] = [];
  deliveryNoteList: DeliveryNote[] = [];

  constructor(private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router,
    private readonly invoiceService: InvoiceService,
    private readonly clothesTypeService: ClothesTypeService,
    private readonly deliveryNoteService: DeliveryNoteService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.productId = params.get('id');

        if(this.productId){
          if(this.productId.toLocaleLowerCase() === 'Add'.toLocaleLowerCase()){
            // -> new Student Functionality
            this.isNewProduct = true;
            this.header = 'Add New Product';
            this.setImage();
          } else {
            // -> Existing Student Functionality
            this.isNewProduct = false;
            this.header = 'Edit Product';

            this.productService.getProduct(this.productId)
            .subscribe(
              (successResponse) => {
                this.product = successResponse;
                this.setImage();
              },
              (errorResponse) => {
                this.setImage
              }
            );
          }

          this.invoiceService.getAllInvoices()
          .subscribe(
            (successResponse)=>{
              this.invoiceList = successResponse;
            }
          );

          this.clothesTypeService.getAllClothesType()
          .subscribe(
            (successResponse)=>{
              this.clothesTypeList = successResponse;
            }
          )

          this.deliveryNoteService.getAllDeliveryNote()
          .subscribe(
            (successResponse)=>{
              this.deliveryNoteList = successResponse;
            }
          )
        }
      }
    )
  }

  onUpdate(): void{
    this.productService.updateProduct(this.product.id, this.product)
    .subscribe(
      (successResponse) => {
        // Show a notification
        this.snackbar.open('Product updated successfully', undefined, {
          duration: 2000
        });
      },
      (errorResponse) => {
        // Log it
      }
    );
  }

  onAdd(): void {
    this.productService.addProduct(this.product)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('Product added successfully', undefined, {
          duration: 2000
        });

        setTimeout(()=>{
        this.router.navigateByUrl(`product/${successResponse.id}`);
      }, 2000);
      },
      (errorResponse) => {
        // Log it
      }
    );
  }

  uploadImage(event: any): void{
    if(this.productId){
      const file: File = event.target.files[0];
      this.productService.uploadImage(this.product.id, file)
      .subscribe(
        (successResponse)=>{
          this.product.imageUrl = successResponse;
          this.setImage();

          // show a notification
          this.snackbar.open('Product Image Updated', undefined, {
            duration: 2000
          });
        },
        (errorResponse)=>{

        }
      );
    }
  }

  private setImage(): void{
    if(this.product.imageUrl){
      this.displayProductImageUrl = this.productService.getImagePath(this.product.imageUrl);
    }else{
      // display a default
      this.displayProductImageUrl = '/assets/product.png';
    }
  }
}
