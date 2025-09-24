import { Component, OnInit } from '@angular/core';
import { Attendance, User, UserService } from '../service/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  standalone: true,
  providers:[UserService],
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {
  status = '';
  attendances: Attendance[] = []
  
  constructor(
    private userService: UserService,
  ){}
  ngOnInit(){
    this.attendances = this.userService.attendance()
  }
}
