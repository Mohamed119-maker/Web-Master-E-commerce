import { IProduct } from './../../shared/interfaces/iproduct';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private readonly toaster = inject(ToastrService);
  private readonly productsService = inject(ProductsService);
  allProducts: IProduct[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }
  showSuccess(): void {
    this.toaster.success("Ok");
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.allProducts = res.data

      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
