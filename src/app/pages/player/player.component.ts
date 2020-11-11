import { Component, OnInit } from '@angular/core';
//services
import { AudioService } from "../../services/audio.service";
import { CloudService } from "../../services/cloud.service";
import { StreamState } from "../../interfaces/stream-state";
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};

  
  constructor(
    public audioService: AudioService,
    public cloudService: CloudService,
    public auth: AuthService
  ) {

    // get media files
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   }

  ngOnInit(): void {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }
  // ...constructor and other methods ...
  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

}
