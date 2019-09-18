import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Makanan',
      expanded: true,
      produks: [
        { id: 0, name: 'Indomie Goreng', price: '1200' },
        { id: 1, name: 'Pop Mie Baso', price: '4100' },
        { id: 2, name: 'Oreo', price: '4000' },
        { id: 3, name: 'Kripik Kusuka', price: '5500' }
      ]
    },
    {
      category: 'Minuman',
      produks: [
        { id: 4, name: 'Sprite', price: '12000' },
        { id: 5, name: 'Fanta', price: '13000' }
      ]
    },
    {
      category: 'Alat Tulis Kantor',
      produks: [
        { id: 6, name: 'Pulpen Faster', price: '8000' },
        { id: 7, name: 'Pensil Fabercastel', price: '5000' },
        { id: 8, name: 'Tipe-x', price: '9000' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProduks() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduk(produk) {
    this.cart.push(produk);
  }
}
