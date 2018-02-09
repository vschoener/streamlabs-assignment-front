import { Message } from './message';

export class Chat {
  messages: Message[];
  nextCallIn: number;
  nextPageToken: string;
}
