import { Component } from '@angular/core';
import {Media, MediaObject} from '@ionic-native/media/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  status:string ="";
  audiofile:MediaObject = this.media.create('file.mp3');
  constructor(private media:Media, private file:File) {}

  RecordAudio()
  {
    this.audiofile.startRecord();
    this.status= "recording...";
  }

  StopRecording()
  {
    this.audiofile.stopRecord();
    this.status="stopped";
  }

  Play()
  {
    this.audiofile.play();
    this.status="Play";
  }

  Pause()
  {
    this.audiofile.pause();
    this.status="Pause";
  }

}
