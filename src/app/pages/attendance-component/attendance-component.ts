import { Component, OnInit } from '@angular/core';
import { Attendance, User, UserService } from '../service/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance-component',
  standalone: true,
  providers:[UserService],
  imports: [ReactiveFormsModule],
  templateUrl: './attendance-component.html',
  styleUrl: './attendance-component.scss'
})
export class AttendanceComponent implements OnInit {
  status = '';
  users: User[] = []
  attendances: Attendance[] = []
  attendanceForm: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ){
    this.attendanceForm = this.fb.group({
      id: ['', Validators.required]
    });
  }
  ngOnInit(){
    this.users = this.userService.getData()
  }
  attendance() {
    let attendanceId = this.attendanceForm.controls['id'].value
    const user = this.users.find(e=>e.id === attendanceId)
    if(user){
      const attendance = {...user,
        attendanceTime: new Date
      }
      this.userService.addAttendance(attendance);

    }else{
      
    }
 }
}
