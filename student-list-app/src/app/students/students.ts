import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.scss'
})
export class Students {
@Input() student!: { id: number; name: string ; detail:string };

select_id : number | null = null ;
 updateShow(id:number){
 this.select_id = this.select_id === id ? null : id ;
}


}
