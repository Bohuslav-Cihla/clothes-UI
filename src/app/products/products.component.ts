import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/ui-models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['number', 'clothesType', 'description', 'size', 'price', 'invoice', 'deliveryNote', 'isSold', 'edit'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private productService: ProductService) { }

  pathDataAccessor(item: any, path: string): any {
    return path.split('.')
      .reduce((accumulator: any, key: string) => {
        return accumulator ? accumulator[key] : undefined;
      }, item);
  }

  ngOnInit(): void {
    // Fetch Products
    this.productService.getAllProducts()
    .subscribe(
      (successResponse) => {
        this.products = successResponse;
        this.dataSource = new MatTableDataSource<Product>(this.products);
        this.dataSource.sortingDataAccessor = this.pathDataAccessor;

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

  filterProducts(){
      this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
