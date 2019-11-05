import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  id = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.queryParamMap.get('id');
    this.route.queryParamMap.subscribe((param) => {
      this.id = +param.get('id');
    });
  }

  inc(num: number) {
    // this.router.navigateByUrl('/page2?id=' + (this.id + num));

    const options: NavigationExtras = { queryParams: { id: this.id + num } };
    this.router.navigate(['/page2'], options);
  }

}
