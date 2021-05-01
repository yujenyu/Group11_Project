import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent implements OnInit {
  @Input() periodId: number;
  @Output() playButtonClicked = new EventEmitter<void>();
  periodName: string;
  periodTime: string;
  style: string;

  toggleByClick(): void {
    this.playButtonClicked.emit();
  }

  ngOnInit(): void {
    this.initGame();
  }

  public initGame(): void {
    let paintingPath: string;
    let periodTime: string;
    let periodName: string;
    switch (this.periodId) {
      case 1:
        periodName = 'Renaissance';
        periodTime = '1400 - 1525';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/The_school_of_athens.jpg';
        break;
      case 2:
        periodName = 'Baroque';
        periodTime = '1600 - 1700';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/The_calling_of_st_matthew.jpg';
        break;
      case 3:
        periodName = 'Romanticism';
        periodTime = '1770 - 1850';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/Liberty_leading_the_people.jpg';
        break;
      case 4:
        periodName = 'Impressionism';
        periodTime = '1860 - 1880';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/Olympia.jpg';
        break;
      case 5:
        periodName = 'Post Impressionism';
        periodTime = '1885 - 1905';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/Where_Do_We_Come_From.jpg';
        break;
      case 6:
        periodName = 'Fauvism';
        periodTime = '1900 - 1907';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/still-life-with-aubergines.jpg';
        break;
      case 7:
        periodName = 'Expressionism';
        periodTime = '1905 - 1933';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/The_Scream.jpg';
        break;
      case 8:
        periodName = 'Cubism';
        periodTime = '1907 - 1922';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/The_Ladies_of_Avignon.jpg';
        break;
      case 9:
        periodName = 'Dadaism \<br\> and Surrealism';
        periodTime = '1909 - 1930';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/The_Persistence_of_Memory.jpg';
        break;
      case 10:
        periodName = 'Abstract Expressionism';
        periodTime = '1940s - 1950s';
        paintingPath = 'https://github.com/yujenyu/Group11_Project/raw/master/game_material/Image500KB/New_York_City_I.jpg';
        break;
    }
    this.periodName = periodName;
    this.periodTime = periodTime;
    this.style = '--bg-img: url("' + paintingPath + '")';
  }
}
