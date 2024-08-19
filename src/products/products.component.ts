import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(){}
  ngOnInit(): void{}

  products = [{id:1, name: "Minimalist Anallog Watch", price: 109, color: 'Blue', available: 'Available'},
    {id:2, name: "Hisense ultra HD Smart TV", price: 3339, color: 'Red', available: 'Available'},
    {id:3, name: "Apple IPhone 12", price: 1855, color: 'Green', available: 'Not Available'},
    {id:4, name: "LG Fully Automatic Washing Machine", price: 1765, color: 'White', available: 'Available'},
    {id:5, name: "Nokia N95", price: 888, color: 'Black', available: 'Available'}
  ]
}


