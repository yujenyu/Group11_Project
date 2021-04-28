import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Quiz-button',
  templateUrl: './Quiz-button.component.html',
  styleUrls: ['./Quiz-button.component.scss'],
})
export class QuizButtonComponent {
  @Output() QuizButtonClicked = new EventEmitter<void>();

  toggleInfoByClick(): void {
    this.QuizButtonClicked.emit();
  }
}
