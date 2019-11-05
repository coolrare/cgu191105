import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  id = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((param) => {
      this.id = +param.get('id');
    });
  }

  inc(num: number) {
    this.router.navigateByUrl('/page1/' + (this.id + num));
  }

}
