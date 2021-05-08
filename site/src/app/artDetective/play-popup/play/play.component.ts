import { Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ArtDetectiveService } from '../../../art-detective.service';

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
  difPointsX: Array<number> = new Array();
  difPointsY: Array<number> = new Array();
  difPointsR: Array<number>  = new Array();
  difPointsDraw: Array<boolean>  = new Array();
  difPointsDescription: Array<string>  = new Array();
  artDetectiveData: any = [];

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
  constructor(private artDetectiveService: ArtDetectiveService) {
  }

  ngOnInit(): void {
    this.initGame();
  }
  // get data from db use this.paintingNumber
  public initGame(): void {
    this.artDetectiveService.getByID(this.paintingNumber).subscribe(
      data => {
        this.artDetectiveData = data;
        // get data from db use this.paintingNumber
        this.paintingName = this.artDetectiveData.nameOfPainting;
        const paintingPath = this.artDetectiveData.imageUrl;
        this.paintingUrl =  'url("' + paintingPath + '") no-repeat center center';
        this.paintingDescription = this.artDetectiveData.description;
        this.allDif = this.remainDif = this.artDetectiveData.numberOfDiff;
        for ( let i = 0; i < this.allDif; i++) {
          this.difPointsX.push(this.artDetectiveData.difference[i].coordinateX);
          this.difPointsY.push(this.artDetectiveData.difference[i].coordinateY);
          this.difPointsR.push(this.artDetectiveData.difference[i].radius);
          this.difPointsDescription.push(this.artDetectiveData.difference[i].diffDiscription);
          this.difPointsDraw.push(false);
        }
      },
      err => {
        console.log(err);
      });
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




