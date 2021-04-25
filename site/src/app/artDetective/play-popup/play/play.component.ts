import {Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})

export class PlayComponent implements OnInit {
  paintingName: string;
  paintingUrl: string;
  allDif: number;
  remainDif: number;
  difData: [[]];

  draw: boolean;
  // pass the photo number
  @ViewChild('myCanvas') canvas: ElementRef;
  @ViewChild('gameProgress') progressText: ElementRef;
  @ViewChild('description') gameDescription: ElementRef;
  @Input() paintingNumber: number;

  @HostListener('click') onMouseMove(e): void {
    const canvasPosition = this.canvas.nativeElement.getBoundingClientRect();
    const mouseX = e.pageX - canvasPosition.x;
    const mouseY = e.pageY - canvasPosition.y;
    this.remainDif--;
    this.checkDraw(mouseX, mouseY);
    this.progressText.nativeElement.innerHTML = this.getGameProgress();
    this.gameDescription.nativeElement.innerHTML = this.getDescription();
  }

  constructor() {
  }

  ngOnInit(): void {
    this.initGame();
  }

  // find the painting data by number
  public initGame(): void {
    let paintingPath: string;
    let paintingName: string;
    let allDif: number;
    switch (this.paintingNumber) {
      case 1:
        paintingName = 'The school of athens';
        paintingPath = 'https://github.com/ZevSong/pa/raw/main/join_school_of_athens.png';
        allDif = 3;
        break;
      case 6:
        paintingName = 'cdscsa';
        paintingPath = 'https://github.com/ZevSong/pa/raw/main/join_D\'ou_venons-nous(half).png';
        allDif = 4;
        break;
    }
    this.paintingName = paintingName;
    this.paintingUrl =  'url("' + paintingPath + '") no-repeat center center';
    this.allDif = this.remainDif = allDif;
  }
  public getGameProgress(): string {
    if (this.remainDif === 0) {
      return 'YOU WIN!';
    } else {
      return 'There are ' + this.allDif + ' differences in total, ' + this.remainDif + ' remaining';
    }
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
          description = 'Each of the two statues represents ancient Greek and Roman deities associated with wisdom.' +
            'The statue on the right is a Minerva is a goddess of wisdom, warfare, and justice and an incarnation of studies.' +
            'The one in the left is Apollo, the god of reason and harmony, who presides over the arts and entertainment,' +
            'such as poetry and music.';
        } else if (this.remainDif === 0) {
          description = 'In the picture, there are many well-known heroic figures primarily in the age of ancient Greek.' +
            'For instance, a man in the bottom right pointing at a diagram on the ground is Euclid, a Greek mathematician.' +
            'A man on the bottom left writing a book is Pitágoras, a Greek philosopher who emphasized the role of math and music.' +
            'A man in the middle left wearing a helmet and armor is Alexander the Great, a king of the ancient Greek kingdom of Macedon.';
        }
        break;
      case 6:
        description = 'https://github.com/ZevSong/pa/raw/main/join_D\'ou_venons-nous(half).png';
        break;
    }
    return description;
  }

  private drawCir(x: number, y: number, r: number): void {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  private checkDraw(x: number, y: number): void {
    this.drawCir(x, y, 50);
  }
}




