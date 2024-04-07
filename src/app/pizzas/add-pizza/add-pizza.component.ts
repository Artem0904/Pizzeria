import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzasService } from '../../services/pizzas.service';
import { CreatePizzaModel, PizzaModel } from '../../services/pizzas';

@Component({
  selector: 'app-add-pizza',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.css'
})
export class AddPizzaComponent {
  form = this.fb.group({
    name: [''],
    price: [0],
    cookingTimeMin: [0],
    description: [''],
    pizzasSizeId: [0],
  });

  constructor(private fb: FormBuilder,
    private service: PizzasService) { }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as CreatePizzaModel;
    this.service.create(item).subscribe(res => {
      console.log(res);
    });
  }
}