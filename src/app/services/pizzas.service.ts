import { Injectable } from '@angular/core';
import { PizzaModel } from './pizzas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://localhost:7283/api/Pizza/"; //"https://dummyjson.com/products";

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PizzaModel[]> {
    console.log("sdfgsdf");
    return this.http.get<PizzaModel[]>(api + "all");
  }

  delete(id: number): Observable<any> {
    console.log("Deleting product id: " + id);
    return this.http.delete(api + id);
  }

  create(item: PizzaModel): void {
    //this.http.post<ProductModel>(api, item);
    console.log("Creating pizza:", item);
  }
}