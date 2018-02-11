import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
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

  @Output() chatIdOutputEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private youtubeApiService: YoutubeApiService ) { }

  ngOnInit() {
  }

  ngOnSelectChatId(chatId: string): void {
    this.chatIdOutputEvent.emit(chatId);
  }

  ngOnChanges(changes: SimpleChanges): void {

    // As this method will be triggered during rendering, we need to check this one
    if (!this.topVideo) {
      return;
    }

    // Then check if there is any change between the event
    if (changes.topVideo.previousValue !== undefined && changes.topVideo.previousValue.videoId === changes.topVideo.currentValue.videoId) {
      return;
    }

    this.ngOnSelectChatId('');

    // Finally get our video data
    this.youtubeApiService.getVideoInfo(this.topVideo.videoId)
      .subscribe(data => this.currentVideo = data);
  }
}
