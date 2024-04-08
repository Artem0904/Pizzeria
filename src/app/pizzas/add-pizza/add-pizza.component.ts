import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzasService } from '../../services/pizzas.service';
import { PizzaSizeModel, CreatePizzaModel, PizzaModel } from '../../services/pizzas';

@Component({
  selector: 'app-add-pizza',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.css'
})
export class AddPizzaComponent implements OnInit {
  form = this.fb.group({
    name: [''],
    price: [0],
    cookingTimeMin: [0],
    description: [''],
    pizzaSizeId: [0],
    imageUrl: ['']
  });

  pizzaSizes: PizzaSizeModel[] = [];

  constructor(private fb: FormBuilder,
    private service: PizzasService,
    private location: Location) { }

  ngOnInit(): void {
    console.log("get sizes on init add pizza");
    this.service.getPizzaSizes().subscribe(res => this.pizzaSizes = res);
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as CreatePizzaModel;
    this.service.create(item).subscribe(res => {
      console.log(res);
      this.back();
    });
  }

  back(): void {
    this.location.back();
  }
}