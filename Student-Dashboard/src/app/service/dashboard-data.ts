import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  
 sidenavState = new BehaviorSubject<boolean>(false);

sidenavToggle(){
  this.sidenavState.next(!this.sidenavState.value);
}

}
