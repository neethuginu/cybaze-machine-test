import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  create(data: any): Observable<any | boolean> {
    return this.http.post("http://localhost:3000/datas", data).pipe(
      mapTo(true),
      catchError((error) => {
        return error;
      })
    );
  }

  login(uname: any, pswd: any) {
    const data: any = { uname, pswd }
    console.log(data)
    return this.http.get("http://localhost:3000/datas", data).pipe(
      map((value: any) => {
        console.log(value)
        for (let i = 0; i <= value.length; i++) {
          let username = value[i].username;
          let password = value[i].password;
          let name = value[i].name
          if (username == uname && password == pswd) {
            localStorage.setItem("name", name)
            alert("Login Succesfully")
            return value;
          }
          else {
            alert("invalid credentials, Please register");
            this.router.navigateByUrl("/register");
          }
        }
      }),
      catchError((error) => {
        return error;
      })
    );
  }

}

