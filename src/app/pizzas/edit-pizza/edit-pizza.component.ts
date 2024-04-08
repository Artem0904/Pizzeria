import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzasService } from '../../services/pizzas.service';
import { PizzaModel } from '../../services/pizzas';
import { PizzaSizeModel } from '../../services/pizzas';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
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
  templateUrl: './edit-pizza.component.html',
  styleUrl: './edit-pizza.component.css'
})
export class EditPizzaComponent implements OnInit {
  // form = this.fb.group({
  //   name: [''],
  //   price: [0],
  //   cookingTimeMin: [0],
  //   description: [''],
  //   pizzaSizeId: [0],
  // });

  form: FormGroup;
  id: number = 0;

  pizzaSizes: PizzaSizeModel[] = [];
  pizza: PizzaModel | null = null;

  constructor(private fb: FormBuilder,
    private service: PizzasService,
    private location: Location,

    private route: ActivatedRoute) { 

      this.form = this.fb.group({
        id: [0, Validators.required],
        name: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(0)]],
        cookingTimeMin: [0, [Validators.required, Validators.min(1)]],
        description: ['', Validators.minLength(10)],
        pizzaSizeId: [0, [Validators.required, Validators.min(1)]],
        // imageUrl: ['', Validators.required],
        pizzaSizeDiametr: [Validators.min(1)],
        imageUrl: ['', Validators.required]
      });
    }


  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getPizzaSizes().subscribe((res) => {
      this.pizzaSizes = res;
      console.log(this.pizzaSizes);
    } );
    this.service.get(this.id).subscribe(res => {
      console.log(res);

      this.pizza = res;
      this.form.setValue(res);
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as PizzaModel;
    this.service.edit(item).subscribe();

    if (this.form.valid) this.location.back();
  }

  back(): void {
    this.location.back();
  }

  onCancel() {
    if (this.pizza)
      this.form.setValue(this.pizza);
  }
}