import { Component, OnInit } from '@angular/core';
import { Attendance, User, UserService } from '../service/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VoiceService } from '../service/voice.service';

@Component({
  selector: 'app-attendance-component',
  standalone: true,
  providers:[UserService, VoiceService],
  imports: [ReactiveFormsModule],
  templateUrl: './attendance-component.html',
  styleUrl: './attendance-component.scss'
})
export class AttendanceComponent implements OnInit {
  status = '';
  users: User[] = []
  attendances: Attendance[] = []
  attendanceForm: FormGroup;
  recording = false;
  mediaRecorder!: MediaRecorder;
  audioChunks: Blob[] = [];
  constructor(
    private userService: UserService,
    private voiceService: VoiceService,
    private fb: FormBuilder
  ){
    this.attendanceForm = this.fb.group({
      id: ['', Validators.required]
    });
  }
  ngOnInit(){
    this.users = this.userService.getData()
  }

  async startRecording() {
    this.status = '';
    this.recording = true;
    this.audioChunks = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (e) => {
        this.audioChunks.push(e.data);
      };
      this.mediaRecorder.start();
    } catch (err) {
      this.status = 'Microphone not available';
      this.recording = false;
    }
  }

  stopRecording() {
    this.recording = false;
    this.mediaRecorder.stop();

    this.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
      this.status = '🔄 Verifying voice...';
      this.voiceService.verifyVoice(audioBlob).subscribe(res => {
        this.status = res.message;
      });
    };
  }
}
