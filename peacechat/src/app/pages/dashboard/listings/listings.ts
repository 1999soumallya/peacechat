import { Component } from '@angular/core';
import { SelectModule } from "primeng/select";
import { PaginatorModule } from "primeng/paginator";
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings',
  imports: [PaginatorModule, SelectModule, FormsModule, TabsModule, CommonModule],
  templateUrl: './listings.html'
})
export class Listings {
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
