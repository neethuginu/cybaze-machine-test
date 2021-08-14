import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as uuid from "uuid";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  submitted = false;
  dataObj: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      address: ["", Validators.required],
      phone: ["", Validators.required],

    });
  }

  onSubmit(data: any) {
    data.id = uuid.v4();
    if (this.form.valid) {
      console.log(data)
      this.dataService.create(data).subscribe((res: any) => {
      })
      alert("registration Successfull")
      this.router.navigateByUrl("login");
    }
    else {
      alert("invalid Form")
    }
  }

}
