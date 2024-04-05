import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PizzasService } from '../../services/pizzas.service';
import { PizzaModel } from '../../services/pizzas';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Router } from '@angular/router';

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
  tableSource = new MatTableDataSource<PizzaModel>([]);

  constructor(private pizzasService: PizzasService,
              public dialog: MatDialog,
              private router: Router,
              private changeDetectorRefs: ChangeDetectorRef
              ) { }

  ngOnInit(): void {
    this.pizzasService.getAll().subscribe(res => {
      this.pizzas = res;
      this.refreshTable();
    });
  }

  onDelete(id: number): void {
    // open confirmation dialog
    this.openConfirmDialog().afterClosed().subscribe(res => {
      if (res === true)
        this.pizzasService.delete(id).subscribe(res => {

          const index = this.pizzas.findIndex(x => x.id === id);

          console.log(index);
          this.pizzas.splice(index, 1);
          console.log(this.pizzas);
          this.refreshTable();
        });
    });
  }

  openConfirmDialog() {
    return this.dialog.open(DeleteConfirmationDialogComponent);
  }

  refreshTable() {
    this.tableSource.data = this.pizzas;
  }
}