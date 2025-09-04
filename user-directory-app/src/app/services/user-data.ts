import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  
constructor(private http:HttpClient){}

url = "https://dummyjson.com/users";

getData(){
  return this.http.get(this.url);
}

}
