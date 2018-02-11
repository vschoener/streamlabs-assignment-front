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
  messageRateBySeconds: number;

  constructor(private youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.chatId || !this.chatId.length) {
      this.chat = new Chat();
      this.messageRateBySeconds = 0;
      return ;
    }

    // Avoid to call the API again if we already have the information
    if (changes.chatId.previousValue === changes.chatId.currentValue) {
      return;
    }

    this.youtubeApiService.getChat(this.chatId, this.nextPageToken)
      .subscribe(data => {
        this.chat = data;
        this.messageRateBySeconds = this.youtubeApiService.calculateRateMessageInSecond(data.messages);
      });
  }
}
