import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User {
    id?: number;
    name?: string;
}
export interface Attendance {
    id?: number;
    name?: string;
    attendanceTime?:Date;
    checkOutTime?:Date;
}

@Injectable()
export class UserService {
    attendance = signal<Attendance[]>([])
    getData() {
        return [
            {id:1, name: 'Ahmed'},
            {id:2, name: 'Sami'},
            {id:3, name: 'Rem'}
        ]
        ;
    }

    constructor(private http: HttpClient) {}

    addAttendance(attendance: any) {
    this.attendance.update((current:any) => [...current, attendance]);
    console.log('attendance===>',this.attendance)
  }
 
}
