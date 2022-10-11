import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api.service',
  templateUrl: './api.service.component.html',
  styleUrls: ['./api.service.component.css']
})
export class ApiServiceComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  viewShop=()=>{
    return this.http.get("https://fakestoreapi.com/products")
  }

  ngOnInit(): void {
  }

}
