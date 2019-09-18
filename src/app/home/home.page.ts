import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService) { }
 
  ngOnInit() {
    this.items = this.cartService.getProduks();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(produk) {
    this.cartService.addProduk(produk);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

}
