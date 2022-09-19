import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/ui-models/product.model';
import { ProductService } from '../product.service';

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
    },
    clothesTypeId: '',
    deliveryNoteId: '',
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
  };

  constructor(private readonly productService: ProductService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.productId = params.get('id');

        if(this.productId){
          this.productService.getProduct(this.productId)
          .subscribe(
            (successResponse) => {
              this.product = successResponse;
            }
          );
        }
      }
    )
  }

}
