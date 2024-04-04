import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PizzasListComponent } from "./pizzas/pizzas-list/pizzas-list.component";
import { AddPizzaComponent } from "./pizzas/add-pizza/add-pizza.component";

//npm install -g @angular/cli
//

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PizzasListComponent, AddPizzaComponent],
})
export class AppComponent {
  title = 'Pizzeria';
}
