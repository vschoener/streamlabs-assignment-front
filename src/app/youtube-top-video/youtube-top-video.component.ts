import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { TopVideo } from '../model/topVideo';

@Component({
  selector: 'app-youtube-top-video',
  templateUrl: './youtube-top-video.component.html',
  styleUrls: ['./youtube-top-video.component.css']
})
export class YoutubeTopVideoComponent implements OnInit {

  topVideos: TopVideo[];

  @Output() topVideoOutputEvent: EventEmitter<TopVideo> = new EventEmitter<TopVideo>();

  constructor(private youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
    this.getTopVideo();
  }

  getTopVideo(): void {
    this.youtubeApiService.getTopLiveVideo()
      .subscribe(data => this.topVideos = data);
  }

  onSelectTopVideo(video: TopVideo): void {
    this.topVideoOutputEvent.emit(video);
  }
}
