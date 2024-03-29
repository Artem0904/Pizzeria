import { Injectable } from '@angular/core';
import { PizzaResponseModel } from './pizzas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://dummyjson.com/products";

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PizzaResponseModel> {
    return this.http.get<PizzaResponseModel>(api);
  }
}