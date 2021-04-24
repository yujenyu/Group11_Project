import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
  @Output() playButtonClicked = new EventEmitter<void>();

  toggleInfoByClick(): void {
    this.playButtonClicked.emit();
  }
}
