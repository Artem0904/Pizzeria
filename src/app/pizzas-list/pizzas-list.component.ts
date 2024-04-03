import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PizzasService } from '../services/pizzas.service';
import { PizzaModel } from '../services/pizzas';

@Component({
  selector: 'app-pizzas-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pizzas-list.component.html',
  styleUrl: './pizzas-list.component.css'
})
export class PizzasListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "price", "cookingTimeMin", ];
  pizzas: PizzaModel[] = [];

  constructor(private pizzasService: PizzasService) { }

  ngOnInit(): void {
    this.pizzasService.getAll().subscribe(res => this.pizzas = res);
  }


}