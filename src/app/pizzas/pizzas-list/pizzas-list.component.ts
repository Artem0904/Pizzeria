import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PizzasService } from '../../services/pizzas.service';
import { PizzaModel } from '../../services/pizzas';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-pizzas-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './pizzas-list.component.html',
  styleUrl: './pizzas-list.component.css'
})
export class PizzasListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "price", "cookingTimeMin", "actions"];
  pizzas: PizzaModel[] = [];

  constructor(private pizzasService: PizzasService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.pizzasService.getAll().subscribe(res => this.pizzas = res);
  }

  onDelete(id: number): void {
    // open confirmation dialog
    this.openConfirmDialog().afterClosed().subscribe(res => {
      if (res === true)
        this.pizzasService.delete(id);
    });
  }

  openConfirmDialog() {
    return this.dialog.open(DeleteConfirmationDialogComponent);
  }

}