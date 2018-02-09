export class Video {
  statistics: {
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    favoriteCount: number,
    commentCount: number,
  };
  liveStreamingDetails: {
    actualStartTime: Date,
    concurrentViewers: number,
    activeLiveChatId: string
  };
}
