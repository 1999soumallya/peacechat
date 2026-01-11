import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Sidebar } from "../../components/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Sidebar, RouterOutlet],
  templateUrl: './dashboard.html',
})
export class Dashboard {

}
