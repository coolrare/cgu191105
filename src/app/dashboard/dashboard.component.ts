import { Component, OnInit } from '@angular/core';
import { MorrisChart } from '../charts/morris/morris.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MorrisChart()
  }

}
