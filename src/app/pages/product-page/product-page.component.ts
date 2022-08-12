import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'New Angular app Crash_project_2022';

  // I підхід
  // products: IProduct[] = [];

  // IІ підхід
  // products$!: Observable<IProduct[]>

  loading = false;
  term = '';

  constructor(public productsService: ProductsService,
    public modalService: ModalService) {
  }


  // I підхід
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll()
      .subscribe(() => {
        this.loading = false;
      });
  }


  // IІ підхід
  // ngOnInit(): void {
  //   this.loading = true;
  //   this.products$ = this.productsService.getAll()
  //     .pipe(tap(() => this.loading = false));
  // }


}
