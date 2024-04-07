import { Routes } from '@angular/router';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { AddPizzaComponent } from './pizzas/add-pizza/add-pizza.component';
import { HomeComponent } from './home/home.component';
import { EditPizzaComponent } from './pizzas/edit-pizza/edit-pizza.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "pizzas", component: PizzasListComponent },
    { path: "add", component: AddPizzaComponent },
    { path: "edit/:id", component: EditPizzaComponent }
];
