import { Component,ChangeDetectorRef } from '@angular/core';
import { UserData } from '../services/user-data';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../search-bar/search-bar';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule,SearchBar,RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
 
  userDetails : any[] = [];
  filteredUser : any[] = [];
  constructor(private userData:UserData,private cdr: ChangeDetectorRef ){}

    ngOnInit(){
          this.getUser();
    }

    getUser(){
      this.userData.getData().subscribe((data:any)=>{
          this.userDetails = data; 
          this.filteredUser = [...this.userDetails];
          console.log(this.userDetails);
          console.log(this.filteredUser);
          
          this.cdr.detectChanges();
          
      })
    }

    searchBar(keyword:string){
       if(!keyword){
        this.filteredUser = [...this.userDetails];
       }
       else{
        this.filteredUser = this.userDetails.filter((user)=>{
         return (user.firstName+" "+user.lastName).toLowerCase().includes(keyword.toLowerCase());
        })
       }
    }

    deleteUser(userId : string | number){
      this.userData.removeUser(userId).subscribe({
        next: ()=>{
          console.log("user deleted sucessfully",userId);
          this.getUser();
        }
      })
    }

}
