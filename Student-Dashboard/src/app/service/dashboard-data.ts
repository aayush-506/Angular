import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Announcement } from '../Interfaces/announcement';
import { Assignment } from '../Interfaces/assignment';
import { Grade } from '../Interfaces/grade';
import { Attendance } from '../Interfaces/attendance';
import { Course } from '../Interfaces/course';
import { Student } from '../Interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {

  gradePoints: Record<string, number> = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "D": 1.0,
    "F": 0.0
  };

  sidenavState = new BehaviorSubject<boolean>(false);
  announcements = new BehaviorSubject<Announcement[]>([]);
  assignments = new BehaviorSubject<Assignment[]>([]);
  grades = new BehaviorSubject<Grade[]>([]);
  attendance = new BehaviorSubject<Attendance[]>([]);
  course = new BehaviorSubject<Course[]>([]);
  student = new BehaviorSubject<Student[]>([]);

  private currentStudentId: number | null = null;

  // required for main-daashboard cards
  gpaSubject = new BehaviorSubject<number>(0);
  attendanceSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.loadAnnouncements();
    this.loadAssignments();
    this.loadGrades();
    this.loadAttendance();
    this.loadCourse();
    this.loadStudent();
  }

  announcementUrl = "http://localhost:3000/announcements";
  assignmentUrl = "http://localhost:3000/assignments";
  gradeUrl= "http://localhost:3000/grades";
  attendanceUrl = "http://localhost:3000/attendance";
  courseUrl = "http://localhost:3000/courses";
  studentUrl = "http://localhost:3000/students";

  // getting and setting studentID
  setCurrentStudentId(id: number) {
    this.currentStudentId = id;
    localStorage.setItem('studentID', id.toString());
  }
  getCurrentStudentId(): number | null {
    return this.currentStudentId ?? (localStorage.getItem('studentID') ? +localStorage.getItem('studentID')! : null);
  }

  // for toggling sidenav current status
  sidenavToggle(){
    this.sidenavState.next(!this.sidenavState.value);
  }

  // fetching announcement from API and updating behaviorSubject
  loadAnnouncements(){
    this.http.get<Announcement[]>(this.announcementUrl).subscribe(data=>{
      this.announcements.next(data);
    })
  }
  // providing the announcement data as read-only Observable
  getAnnouncementsData(): Observable<Announcement[]>{
    return this.announcements.asObservable();
  }
  // finding the latest Announcement
  getLatestAnnouncement(): Observable<Announcement | null> {
    return this.getAnnouncementsData().pipe(
      map(data => {
        if (!data.length) return null;
        // Sort by date descending (newest first)
        return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
      })
    );
  }

  // fetching assignments from API and updating behaviorSubject
  loadAssignments(){
    this.http.get<Assignment[]>(this.assignmentUrl).subscribe(data=>{
      this.assignments.next(data);
    })
  }
  // providing the announcement data as read-only Observable
  getAssignmentsData(){
    return this.assignments.asObservable();
  }

  // fetching grades from API and updating behaviorSubject
  loadGrades(){
    this.http.get<Grade[]>(this.gradeUrl).subscribe(data=>{
      this.grades.next(data);
      // calculating the grades
      const studentId = this.getCurrentStudentId();
      if(studentId) this.calculateGpaForStudent(studentId);
    })
  }
  // providing the grades data as read-only Observable
  getGradesData(){
    return this.grades.asObservable();
  }

  // fetching attendance from API and updating behaviorSubject
  loadAttendance(){
    this.http.get<Attendance[]>(this.attendanceUrl).subscribe(data=>{
      this.attendance.next(data);
      this.calculateCurrentAttendance(this.getCurrentStudentId());
    })
  }
  // providing the attandance data as read-only Observable
  getAttendanceData(){
    return this.attendance.asObservable();
  }

  // fetching course from API and updating behaviorSubject
  loadCourse(){
    this.http.get<Course[]>(this.courseUrl).subscribe(data=>{
      this.course.next(data);
    })
  }
  // providing the course data as read-only Observable
  getCourseData(){
    return this.course.asObservable();
  }

  // fetching student from API and updating behaviorSubject
  loadStudent(){
    this.http.get<Student[]>(this.studentUrl).subscribe(data=>{
      this.student.next(data);
    })
  }
  // providing the student data as read-only Observable
  getStudentData(){
    return this.student.asObservable();
  }

  // calculating the grades   
  calculateGpaForStudent(studentId: number): void {
    this.getGradesData().pipe(
      map(grades => {
        const studentGrades = grades.filter(g => g.studentId === studentId);
        if (studentGrades.length === 0) return 0;
        const totalPoints = studentGrades.reduce((sum, g) => sum + (this.gradePoints[g.grade] || 0), 0);
        const gpa = parseFloat((totalPoints / studentGrades.length).toFixed(2));
        return gpa;
      })
    ).subscribe(gpa => this.gpaSubject.next(gpa));
  }
  // accessing the calculated grade
  getGpa(): Observable<number> {
    return this.gpaSubject.asObservable();
  }

  // calculating the currentAttendance
  calculateCurrentAttendance(studentId: number | null): void {
    if(!studentId) return;
    this.attendance.pipe(
      map(records => records.filter(r => r.studentId === studentId)),
      map(records => {
        const totalAttended = records.reduce((sum, r) => sum + r.attended, 0);
        const totalClasses = records.reduce((sum, r) => sum + r.total, 0);
        return parseFloat(((totalAttended / totalClasses) * 100).toFixed(2));
      })
    ).subscribe(percentage => this.attendanceSubject.next(percentage));
  }
  // accessing the calculated attendance
  getCurrentAttendance(): Observable<number> {
    return this.attendanceSubject.asObservable();
  }
}
