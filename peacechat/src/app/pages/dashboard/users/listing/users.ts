import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from "primeng/paginator";
import { SelectModule } from "primeng/select";

@Component({
  selector: 'app-users',
  imports: [PaginatorModule, SelectModule, FormsModule],
  templateUrl: './users.html',
})
export class Users {
  rows = 5;
  page = 0;
  totalRecords = 100;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
  ];

  onPageChange(event: any) {
    this.rows = event.rows;
    this.page = event.page;
    const currentPage = event.page + 1;
    console.log('Page:', currentPage, 'Rows:', this.rows);
  }
}
