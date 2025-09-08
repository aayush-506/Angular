import { Component } from '@angular/core';
import { UserData } from '../services/user-data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.scss'
})
export class EditUser {
    userId!: number | string;

    constructor(private userData : UserData , private route : ActivatedRoute , private router : Router ){}
     editUser = new FormGroup({
      name : new FormControl(''),
      role : new FormControl(''),
      dept : new FormControl(''),
      email : new FormControl(''),
       })

      ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id')!; 
        console.log("Editing user with id:", this.userId);
        }


     onSubmit(){
       const user = {
           firstName : this.editUser.value.name,
           email: this.editUser.value.email,
           company: {
           department : this.editUser.value.dept,
           title : this.editUser.value.role
            }
          }
          // main function
            this.userData.editUser(this.userId , user).subscribe({
             next: (res) => {
                 console.log("User updated:", res);
                  this.router.navigate(['/']); 
              }
          })
     }
}
