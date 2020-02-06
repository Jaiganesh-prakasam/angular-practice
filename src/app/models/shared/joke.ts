// data model
export class Joke {
  jokeConversation: string;
  jokeReply: string;
  jokeStatus: boolean;
  constructor(jokec, joker) {
    this.jokeConversation = jokec;
    this.jokeReply = joker;
    this.jokeStatus = false;
  }
  jokeStatusToggle() {
    this.jokeStatus = !this.jokeStatus;
  }
}
