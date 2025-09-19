import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatModule } from '../../appModules/mat-module';
import { DashboardData } from '../../service/dashboard-data';
import { Router } from '@angular/router';
import { Student } from '../../Interfaces/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-student',
  imports: [FormsModule, MatModule],
  templateUrl: './login-student.html',
  styleUrl: './login-student.scss'
})
export class LoginStudent {
  username: string = '';
  password: string = '';
  hide: boolean = true;

  constructor(private dashboardDataService: DashboardData, private router: Router , private snackBar: MatSnackBar) {}

  onLogin() {
    this.dashboardDataService.getStudentData().subscribe({
      next: (students: Student[]) => {
        const matchedStudent = students.find(
          s => s.rollNo === this.username && s.password === this.password
        );

        if (matchedStudent) {
          // Set the current student ID in DashboardData service
          this.dashboardDataService.setCurrentStudentId(matchedStudent.id);

          localStorage.setItem('studentID', matchedStudent.id.toString());

          // snackbar for successfull login
                this.snackBar.open('Login Successful ✅', 'Close', {
                  duration: 3000,        
                  verticalPosition: 'top',
                  horizontalPosition: 'end',
                  panelClass: ['bg-red-600', 'text-white'] 
                });
          
  
          this.router.navigate(['/dashboard'], { replaceUrl: true });
        } else {
            this.snackBar.open('❌ Invalid Username or Password', 'Close', {
                  duration: 3000,        
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center',
                  panelClass: ['bg-red-600', 'text-white'] 
                });
        }
      },
      error: (err) => {
        console.error("API error:", err);
        alert("⚠️ Failed to fetch student data. Please try again.");
      }
    });
  }
}
