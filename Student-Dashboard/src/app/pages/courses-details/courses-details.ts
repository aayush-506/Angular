import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  imports: [CommonModule],
  templateUrl: './courses-details.html',
  styleUrl: './courses-details.scss'
})
export class CoursesDetails {
category! : string ;

constructor(private route : ActivatedRoute){}

ngOnInit(){
  this.route.paramMap.subscribe(params=>{
    this.category = params.get('category') || '';
    console.log(this.category);
    
  })
}
}
