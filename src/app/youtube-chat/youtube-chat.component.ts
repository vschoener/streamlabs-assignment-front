import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { Chat } from '../model/chat';

@Component({
  selector: 'app-youtube-chat',
  templateUrl: './youtube-chat.component.html',
  styleUrls: ['./youtube-chat.component.css']
})
export class YoutubeChatComponent implements OnInit, OnChanges {
  @Input() chatId: string;
  nextPageToken: string;
  chat: Chat;

  constructor(private youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chatId.previousValue !== undefined && changes.chatId.previousValue === changes.topVideo.currentValue) {
      return;
    }

    this.youtubeApiService.getChat(this.chatId, this.nextPageToken)
      .subscribe(data => this.chat = data);
  }
}
