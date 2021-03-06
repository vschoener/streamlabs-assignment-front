import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { YoutubeTopVideoComponent } from './youtube-top-video/youtube-top-video.component';
import { YoutubeApiService } from './youtube-api.service';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeChatComponent } from './youtube-chat/youtube-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubeTopVideoComponent,
    YoutubeVideoComponent,
    YoutubeChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    YoutubeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
