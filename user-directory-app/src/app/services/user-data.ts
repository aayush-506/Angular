import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  
constructor(private http:HttpClient){}

url = "http://localhost:3000/users";

getData(){
  return this.http.get(this.url);
}

addUser(user:any){
  return this.http.post(`${this.url}`,user);
}

}
