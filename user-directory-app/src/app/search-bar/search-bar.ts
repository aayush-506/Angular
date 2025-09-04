import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
   keyword : string = "";
   @Output() searchEvent = new EventEmitter<string>();

   onSearch(){
    this.searchEvent.emit(this.keyword);
   }
}
