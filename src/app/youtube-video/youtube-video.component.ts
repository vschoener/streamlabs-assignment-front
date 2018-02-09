import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { Video } from '../model/video';
import { TopVideo } from '../model/topVideo';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit, OnChanges {
  currentVideo: Video;
  @Input() topVideo: TopVideo;

  selectedChatId: string;

  constructor(private youtubeApiService: YoutubeApiService ) { }

  ngOnInit() {
  }

  ngOnSelectChatId(chatId): void {
    this.selectedChatId = chatId;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.topVideo) {
      return;
    }

    if (changes.topVideo.previousValue !== undefined && changes.topVideo.previousValue.videoId === changes.topVideo.currentValue.videoId) {
      return;
    }

    this.youtubeApiService.getVideoInfo(this.topVideo.videoId)
      .subscribe(data => this.currentVideo = data);
  }
}
