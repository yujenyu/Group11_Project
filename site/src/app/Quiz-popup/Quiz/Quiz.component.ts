import {Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.scss'],
})

export class QuizComponent implements OnInit {
  paintingName: string;
  paintingUrl: string;
  allDif: number;
  remainDif: number;
  // difData: [number][number][boolean];

  draw: boolean;
  // pass the photo number
  @ViewChild('myCanvas') canvas: ElementRef;
  @ViewChild('gameProgress') progressText: ElementRef;
  @ViewChild('description') gameDescription: ElementRef;
  @Input() paintingNumber: number;

  @HostListener('click') onMouseMove(e): void {
    if (this.remainDif === 0) {
      return;
    }
    const canvasPosition = this.canvas.nativeElement.getBoundingClientRect();
    const mouseX = e.pageX - canvasPosition.x;
    const mouseY = e.pageY - canvasPosition.y;
    this.checkDraw(mouseX, mouseY);
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
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_school_of_athens.png';
        allDif = 3;
        break;
      case 2:
        paintingName = 'The Calling of St Matthew';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_the%20calling%20of%20st%20matthew.png';
        allDif = 3;
        break;
      case 3:
        paintingName = 'Liberty Leading the People';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/' +
          'join_images/join_liberty_leading_the_people.png';
        allDif = 3;
        break;
      case 4:
        paintingName = 'The school of athens';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_Olympia.png';
        allDif = 3;
        break;
      case 5:
        paintingName = 'Where Do We Come From? What Are We? Where Are We Going?';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_D\'ou_venons-nous.png';
        allDif = 4;
        break;
      case 6:
        paintingName = 'Still Life with Aubergines';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/' +
          'join_images/join_still-life-with-aubergines.png';
        allDif = 4;
        break;
      case 7:
        paintingName = 'The Scream';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_The_Scream.png';
        allDif = 4;
        break;
      case 8:
        paintingName = 'The Ladies of Avignon';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/' +
          'join_images/join_Les_Demoiselles_d\'Avignon.png';
        allDif = 4;
        break;
      case 9:
        paintingName = 'The Persistence of Memory';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_The_Persistence_of_Memory.png';
        allDif = 4;
        break;
      case 10:
        paintingName = 'New York City I';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_New%20York%20City%20I.png';
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
    switch (this.paintingNumber) {
      case 1:
        if (this.remainDif === this.allDif) {
          description = '"School of Athens" is a large mural that the Pope ordered Raphael to paint in the Vatican palace, depicting intellectuals and hero from the ancient Greeks to the Renaissance.';
        } else if (this.remainDif === 1) {
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
    let i: number;
    for (i = 0; i < this.allDif; i++) {
      if (!this.isDrew(i) && this.isPointInCircle(x, y, 50, 50, 50)) {
        this.drawCir(50, 50, 50);
        this.remainDif--;
        // turn isDrew to true;
        this.progressText.nativeElement.innerHTML = this.getGameProgress();
        this.gameDescription.nativeElement.innerHTML = this.getDescription();
        return;
      }
    }
  }
  private isPointInCircle(x: number, y: number, centerX: number, centerY: number, radius: number): boolean {
    const dx = x - centerX;
    const dy = y - centerY;
    const distSq = dx * dx + dy * dy;
    const rsq = radius * radius;
    return distSq < rsq;
  }
  private isDrew(difId: number): boolean {
    return false;
  }
}
