import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

// I would and should use a ConfigService to manage properly but for now let's focus on the mission
import { environment } from '../environments/environment';
import { TopVideo } from './model/topVideo';
import { Video } from './model/video';
import { Chat } from './model/chat';
import { Message } from './model/message';

@Injectable()
export class YoutubeApiService {
  private apiSetting = environment.api;
  private url;

  constructor(private http: HttpClient) {
    this.url = `${this.apiSetting.server}:${this.apiSetting.port}`;
  }

  getTopLiveVideo() {
    return this.http.get<TopVideo[]>(`${this.url}/youtube/live/topVideos`)
      .pipe(
        tap(data => this.debugMessage(data))
      );
      // TODO add pipe / tap process and handle errors
  }

  getVideoInfo(videoId: string) {
    return this.http.get<Video>(`${this.url}/youtube/video/${videoId}`)
      .pipe(
        tap(data => this.debugMessage(data))
      );
    // TODO add pipe / tap process and handle errors
  }

  getChat(chatId: string, nextPageToken: string) {
    return this.http.get<Chat>(`${this.url}/youtube/chat/${chatId}`)
      .pipe(
        tap(data => this.debugMessage(data)),
        map(data => {
          data.messages = data.messages.map(message => {
            // TSLint display an error over the Date type but it's not
            // converted properly... So we need to do it manually
            // Maybe better to create general interceptor / service method to handle it
            message.publishedAt = new Date(Date.parse(message.publishedAt));
            return message;
          });
          return data;
        })
      );
    // TODO add pipe / tap process and handle errors
  }

  calculateRateMessageInSecond(messages: Message[]): number {
        const messageBySeconds = [];
        messages.forEach(message => {
          // I could also format the date as: 'YYY-MM-DD h:i:S' to group and count message
          // Not proud of this parseInt way but it works as expected
          const dateInSeconds = parseInt(message.publishedAt.getTime() / 1000, 2);
          // We don't need to store the amount of message by seconds but let's keep it
          messageBySeconds[dateInSeconds] = messageBySeconds[dateInSeconds]++ || 0;
        });

        return messages.length / messageBySeconds.length;
  }

  // TODO: Create a service for any other component that need to dump message that way
  private debugMessage(message) {
    if (!environment.production) {
      console.log(message);
    }
  }
}
