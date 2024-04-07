import { Injectable } from '@angular/core';
import { CreatePizzaModel, PizzaModel } from './pizzas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  create(item: CreatePizzaModel): Observable<any> {
    console.log("Creating pizza:", item);

    const formData = new FormData();

    for (const key in item) {
      formData.append(key, item[key as keyof CreatePizzaModel] as string | Blob);
    }

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(api, formData, { headers: headers });
  }
}