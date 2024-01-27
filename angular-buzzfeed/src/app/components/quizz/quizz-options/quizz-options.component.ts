import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/models/options';

@Component({
  selector: 'app-quizz-options',
  templateUrl: './quizz-options.component.html',
  styleUrls: ['./quizz-options.component.css']
})
export class QuizzOptionsComponent {
  @Input() finished: boolean = false;
  @Input() options: Option[] = [];
  @Output() answerEvent = new EventEmitter<string>();

  playerChoose(value: string): void {
    this.answerEvent.emit(value);
  }
}
