import { Component } from '@angular/core';
import { TopVideo } from './model/topVideo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube Dashboard';

  selectedTopVideo: TopVideo;

  selectedChatId: string;

  receiveMessageEvent(topVideoEvent) {
      this.selectedTopVideo = topVideoEvent;
  }

  receiveChatIdEvent(chatIdEvent) {
    this.selectedChatId = chatIdEvent;
  }
}
