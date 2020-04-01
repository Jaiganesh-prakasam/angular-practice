import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Joke } from "../../models/shared/joke";

@Component({
  selector: "app-joke-form",
  templateUrl: "./joke-form.component.html",
  styleUrls: ["./joke-form.component.sass"],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  jokeForm: FormGroup;
  jokeConversation: FormControl;
  jokeReply: FormControl;
  constructor() {
    this.jokeFormControlInitiation();
    this.jokeFormGroup();
  }
  ngOnInit() {}
  jokeFormControlInitiation() {
    this.jokeConversation = new FormControl("", Validators.required);
    this.jokeReply = new FormControl("", Validators.required);
  }
  jokeFormGroup() {
    this.jokeForm = new FormGroup({
      conversation: this.jokeConversation,
      reply: this.jokeReply
    });
  }
  createJoke(convo, reply) {
    this.jokeCreated.emit(new Joke(convo, reply));
  }
}
