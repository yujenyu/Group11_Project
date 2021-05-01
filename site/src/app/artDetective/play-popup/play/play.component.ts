import {Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})

export class PlayComponent implements OnInit {
  paintingName: string;
  paintingUrl: string;
  paintingDescription: string;
  allDif: number;
  remainDif: number;
  difPointsX: Array<number>;
  difPointsY: Array<number>;
  difPointsR: Array<number>;
  difPointsDraw: Array<boolean>;
  difPointsDescription: Array<string>;

  draw: boolean;
  // pass the photo number
  @ViewChild('myCanvas') canvas: ElementRef;
  @ViewChild('gameProgress') progressText: ElementRef;
  @ViewChild('description') gameDescription: ElementRef;
  @Input() paintingNumber: number;

  @HostListener('click') onMouseMove(e): void {
    if (this.remainDif === 0) {
      // return;
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
    let paintingDescription: string;
    let allDif: number;
    switch (this.paintingNumber) {
      case 1:
        paintingName = 'The school of athens';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_school_of_athens.png';
        paintingDescription = '"School of Athens" is a large mural that the Pope ordered Raphael to paint in the Vatican palace, depicting intellectuals and hero from the ancient Greeks to the Renaissance.';
        allDif = 3;
        break;
      case 2:
        paintingName = 'The Calling of St Matthew';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/join_images/join_the%20calling%20of%20st%20matthew.png';
        paintingDescription = '"The Calling of St. Matthew" is the one of the master piece in Baroque art drawing a scene of "Gospel of Matthew" where St. Matthew is called by Jesus Christ.';
        allDif = 3;
        break;
      case 3:
        paintingName = 'Liberty Leading the People';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/' +
          'join_images/join_liberty_leading_the_people.png';
        allDif = 3;
        break;
      case 4:
        paintingName = 'Olympia (Manet)';
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
    this.paintingDescription = paintingDescription;
    this.allDif = this.remainDif = allDif;
  }
  public getGameProgress(): string {
    if (this.remainDif === 0) {
      return 'YOU WIN!';
    } else {
      return 'There are ' + this.allDif + ' differences in total, ' + this.remainDif + ' remaining';
    }
  }
  private checkDraw(x: number, y: number): void {
    let i: number;
    for (i = 0; i < this.allDif; i++) {
      const centerX = this.difPointsX[i];
      const centerY = this.difPointsY[i];
      const radius = this.difPointsR[i];
      if (!this.isDrew(i) && this.isPointInCircle(x, y, centerX, centerY, radius)) {
        this.drawCir(x, y, radius);
        this.remainDif--;
        this.difPointsDraw[i] = true;
        this.progressText.nativeElement.innerHTML = this.getGameProgress();
        this.gameDescription.nativeElement.innerHTML = this.difPointsDescription[i];
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
    return this.difPointsDraw[difId];
  }
  private drawCir(x: number, y: number, r: number): void {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }
}




