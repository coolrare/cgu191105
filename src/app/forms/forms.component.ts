import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['Will', [Validators.required]],
      phone: ['0988-888888', [Validators.required, Validators.pattern(/\d{4}-\4{6}/)]],
      emergencyContacts: this.fb.array([
        this.fb.group({
          name: ['Tom', [Validators.required]],
          phone: ['09', [Validators.required, Validators.pattern(/\d{4}-\4{6}/)]],
        }),
        this.fb.group({
          name: ['Lee', [Validators.required]],
          phone: ['08', [Validators.required, Validators.pattern(/\d{4}-\4{6}/)]],
        })
      ])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // TODO
    }
  }

}
