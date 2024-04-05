import { Routes } from '@angular/router';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { AddPizzaComponent } from './pizzas/add-pizza/add-pizza.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "pizzas", component: PizzasListComponent },
    { path: "add", component: AddPizzaComponent }
];
