import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#dataTables-example').DataTable({
      responsive: true
    });

  }

}
