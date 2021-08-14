import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name:any;

  constructor(    
    private router: Router
    ) {
      this.name = localStorage.getItem("name")
     }
 
  ngOnInit(): void {
  }
  onSubmit(){
    alert("Logout Succesfully")
    this.router.navigateByUrl("");
  }
}
