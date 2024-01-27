import { Component, Input } from '@angular/core';
import { Question } from "src/app/models/question";

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.css']
})
export class QuizzQuestionComponent {
  @Input() finished: boolean = false;
  @Input() question: string = '';
}
