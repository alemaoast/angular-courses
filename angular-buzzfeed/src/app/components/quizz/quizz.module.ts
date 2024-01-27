import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './quizz.component';
import { QuizzQuestionComponent } from './quizz-question/quizz-question.component';
import { QuizzOptionsComponent } from './quizz-options/quizz-options.component';
import { QuizzResultsComponent } from './quizz-results/quizz-results.component';

@NgModule({
  declarations: [
    QuizzComponent,
    QuizzQuestionComponent,
    QuizzOptionsComponent,
    QuizzResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuizzComponent
  ]
})
export class QuizzModule { }
