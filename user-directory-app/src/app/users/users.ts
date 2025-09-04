import { Component,ChangeDetectorRef } from '@angular/core';
import { UserData } from '../services/user-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
 
  userDetails : any[] = [];
  constructor(private userData:UserData,private cdr: ChangeDetectorRef ){}

    ngOnInit(){
          this.getUser();
    }

    getUser(){
      this.userData.getData().subscribe((data:any)=>{
          this.userDetails = data.users; 
          console.log(this.userDetails);
          this.cdr.detectChanges();
          
      })
    }

}
