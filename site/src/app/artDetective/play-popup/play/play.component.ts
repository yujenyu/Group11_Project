import {Component, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})

export class PlayComponent{
  allDif: number;
  remainDif: number;
  // pass the photo number
  @Input() paintingNumber: number;
  @HostListener('mousemove', ['$event']) onMouseMove(e): number {
    return 1;
  }
  constructor() {
  }
  public getPaintingName(): string {
    let paintingName: string;
    switch (this.paintingNumber) {
      case 1:
        paintingName = 'The school of athens';
        break;
      case 6:
        paintingName = 'cdscsa';
        break;
    }
    return paintingName;
  }
  public getPaintingUrl(): string {
    let paintingPath: string;
    switch (this.paintingNumber) {
      case 1:
        paintingPath = 'https://github.com/ZevSong/pa/raw/main/join_school_of_athens.png';
        break;
      case 6:
        paintingPath = 'https://github.com/ZevSong/pa/raw/main/join_D\'ou_venons-nous(half).png';
        break;
    }
    return 'url("' + paintingPath + '") no-repeat';
  }
  public getProgress(): string {
    this.allDif = 3;
    this.remainDif = 0;

    return 'There are ' + this.allDif + ' differences in total, ' + this.remainDif + ' remaining';
  }
  public getDescription(): string {
    let description: string;
    if (this.remainDif === this.allDif) {
      description = '';
      return description;
    }
    switch (this.paintingNumber) {
      case 1:
        if (this.remainDif === 1) {
          description = 'Each of the two statues represents ancient Greek and Roman deities associated with wisdom. \n' +
            'The statue on the right is a Minerva is a goddess of wisdom, warfare, and justice and an incarnation of studies.\n ' +
            'The one in the left is Apollo, the god of reason and harmony, who presides over the arts and entertainment, \n' +
            'such as poetry and music.';
        } else if (this.remainDif === 0) {
          description = 'In the picture, there are many well-known heroic figures primarily in the age of ancient Greek.\n' +
            'For instance, a man in the bottom right pointing at a diagram on the ground is Euclid, a Greek mathematician.\n' +
            'A man on the bottom left writing a book is Pitágoras, a Greek philosopher who emphasized the role of math and music.\n' +
            'A man in the middle left wearing a helmet and armor is Alexander the Great, a king of the ancient Greek kingdom of Macedon.';
        }
        break;
      case 6:
        description = 'https://github.com/ZevSong/pa/raw/main/join_D\'ou_venons-nous(half).png';
        break;
    }
    return description;
  }

}




