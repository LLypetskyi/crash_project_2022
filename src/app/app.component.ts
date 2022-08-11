import { Component, OnInit } from '@angular/core';

import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { products } from './data/products';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'New Angular app Crash_project_2022';

  // I підхід
  // products: IProduct[] = [];

  // IІ підхід
  products$!: Observable<IProduct[]>

  loading = false;
  term ='';

  constructor(private productsService: ProductsService) {
  }


  // I підхід
  // ngOnInit(): void {
  //   this.loading = true;
  //   this.productsService.getAll()
  //     .subscribe((products) => {
  //       this.products = products;
  //       this.loading = false;
  //     });
  // }


  // IІ підхід
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll()
      .pipe(tap(() => this.loading = false));
  }

}
