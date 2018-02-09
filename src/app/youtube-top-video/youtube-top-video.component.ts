import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { TopVideo } from '../model/topVideo';

@Component({
  selector: 'app-youtube-top-video',
  templateUrl: './youtube-top-video.component.html',
  styleUrls: ['./youtube-top-video.component.css']
})
export class YoutubeTopVideoComponent implements OnInit {

  topVideos: TopVideo[];
  selectedVideo: TopVideo;

  constructor(private youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
    this.getTopVideo();
  }

  getTopVideo(): void {
    this.youtubeApiService.getTopLiveVideo()
      .subscribe(data => this.topVideos = data);
  }

  onSelectTopVideo(video: TopVideo): void {
    this.selectedVideo = video;
  }
}
