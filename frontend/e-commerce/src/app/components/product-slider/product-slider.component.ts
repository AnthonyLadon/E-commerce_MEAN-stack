import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../types/product";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-product-slider",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-slider.component.html",
  styleUrl: "./product-slider.component.css",
})
export class ProductSliderComponent implements OnInit {
  product$: Observable<Product[]> | null = null;

  constructor(private productService: ProductService) {}

  // fetch all products (param = nb of products displayed)
  ngOnInit() {
    this.product$ = this.productService.getProducts(10);
    console.log(this.product$);
  }
}
