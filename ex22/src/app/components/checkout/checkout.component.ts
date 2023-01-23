import { Component, OnInit } from '@angular/core';
import { ProductpageService } from 'src/app/services/productpage.service';
import { IProductpage } from 'src/IProductpage'; 

import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/shared/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productpageService:ProductpageService,private activatedRoute: ActivatedRoute,
    private cartService :CartService) { }
  
  public products : any []= [];
  public grandTotal! : number;

  ngOnInit(): void {
   
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;    
      const cartProduct={products:this.products,quantity:this.products}
     
      console.log("ngOnInit :"+JSON.stringify(cartProduct));
      this.products.forEach(element => {
       console.log(element.products)
      
       
       localStorage.setItem('cartObj',JSON.stringify(cartProduct));
      });
      this.grandTotal = this.cartService.getTotalPrice(cartProduct.products,cartProduct.quantity);
   
    });

  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
