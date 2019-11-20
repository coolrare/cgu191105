import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(3)]
      ]
    });
  }

  onSubmit(ngform: NgForm) {
  }

}
