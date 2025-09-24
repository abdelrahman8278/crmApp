import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class VoiceService {

    constructor(private http: HttpClient) {}

  verifyVoice(voiceBlob: Blob) {
    console.log("Sending voice to API:", voiceBlob);

    const isMatch = Math.random() > 0.3;

    return of({
      success: isMatch,
      message: isMatch ? 'Attendance recorded successfully'
                       : 'Voice not recognized, please try again'
    }).pipe(delay(2000));
  }
  verifyVoiceCheckOut(voiceBlob: Blob) {
    console.log("Sending voice to API:", voiceBlob);

    const isMatch = Math.random() > 0.3;

    return of({
      success: isMatch,
      message: isMatch ? 'Check out recorded successfully'
                       : 'Voice not recognized, please try again'
    }).pipe(delay(2000));
  }
 
}
