import { Component, OnInit } from '@angular/core';
import { ApiServiceComponent } from '../api.service/api.service.component';

@Component({
  selector: 'app-shoping-cart-list',
  templateUrl: './shoping-cart-list.component.html',
  styleUrls: ['./shoping-cart-list.component.css']
})
export class ShopingCartListComponent implements OnInit {

  constructor(private myapi:ApiServiceComponent) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewShop().subscribe(
      (data)=>{
      this.productData=data
    }
    )
  }
  productData:any= []

  ngOnInit(): void {
  }

}
