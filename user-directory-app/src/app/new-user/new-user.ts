import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserData } from '../services/user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.scss'
})
export class NewUser {

  constructor(private userData:UserData , private router: Router){}

  newUser = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    dept: new FormControl(''),
    email: new FormControl(''),
    image: new FormControl('')
  })

  onSubmit(){

    const user = {
      firstName : this.newUser.value.name,
      email: this.newUser.value.email,
      image: this.newUser.value.image,
      company: {
        department : this.newUser.value.dept,
        title : this.newUser.value.role
      }
    }
    this.userData.addUser(user).subscribe({
      next: (result) =>{
        console.log("user Added",result);
        this.router.navigate(['/']);
      } ,
      error:(err) => console.log("error",err)
    })
    console.log(this.newUser.value);
  }
}
