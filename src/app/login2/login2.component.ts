import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators, FormControl } from '@angular/forms';

function checkTWID(control: FormControl) {
  if (checkID(control.value)) {
    return null;
  } else {
    return {
      TWID: false
    };
  }
}


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
        [Validators.required, checkTWID]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      isRemember: [
        false
      ]
    });

    const data = {
      email: 'doggy.huang@gmail.com',
      password: '123123',
      isRemember: false
    };

    this.form.setValue(data);
  }

  onSubmit(ngform: NgForm) {
    if (this.form.valid) {
      // TODO
    }
  }

}





function checkID(id: string) {
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

  if (id.length !== 10) { return false; }
  let i = tab.indexOf(id.charAt(0));
  if (i === -1) { return false; }
  let sum = A1[i] + A2[i] * 9;

  for (i = 1; i < 10; i++) {
    const v = parseInt(id.charAt(i), 10);
    if (isNaN(v)) { return false; }
    sum = sum + v * Mx[i];
  }
  if (sum % 10 !== 0) { return false; }
  return true;
}
