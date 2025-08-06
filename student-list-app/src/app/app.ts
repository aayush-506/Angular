import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Students } from './students/students';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,Header,Students],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('student-list-app');

  data = [
  { id: 1, 
    name: 'Aayush Chauhan' ,
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem, voluptate mollitia illum fugiat beatae, repellat est, ea sunt aperiam molestiae quisquam corrupti quasi? Assumenda quas expedita sed rerum nesciunt autem adipisci commodi quos quidem tenetur, odit itaque voluptatem labore neque omnis vel hic! Ex corporis sint impedit tenetur."
  },
  { id: 2,
    name: 'Priya Sharma' ,
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem, voluptate mollitia illum fugiat beatae, repellat est, ea sunt aperiam molestiae quisquam corrupti quasi? Assumenda quas expedita sed rerum nesciunt autem adipisci commodi quos quidem tenetur, odit itaque voluptatem labore neque omnis vel hic! Ex corporis sint impedit tenetur."
  },
  { id: 3,
    name: 'Rahul Verma' ,
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem, voluptate mollitia illum fugiat beatae, repellat est, ea sunt aperiam molestiae quisquam corrupti quasi? Assumenda quas expedita sed rerum nesciunt autem adipisci commodi quos quidem tenetur, odit itaque voluptatem labore neque omnis vel hic! Ex corporis sint impedit tenetur."
  },
  { id: 4, 
    name: 'Sneha Singh' ,
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem, voluptate mollitia illum fugiat beatae, repellat est, ea sunt aperiam molestiae quisquam corrupti quasi? Assumenda quas expedita sed rerum nesciunt autem adipisci commodi quos quidem tenetur, odit itaque voluptatem labore neque omnis vel hic! Ex corporis sint impedit tenetur."
  },
  { id: 5, 
    name: 'Ravi Mehta' ,
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem, voluptate mollitia illum fugiat beatae, repellat est, ea sunt aperiam molestiae quisquam corrupti quasi? Assumenda quas expedita sed rerum nesciunt autem adipisci commodi quos quidem tenetur, odit itaque voluptatem labore neque omnis vel hic! Ex corporis sint impedit tenetur."
  }
];


}
