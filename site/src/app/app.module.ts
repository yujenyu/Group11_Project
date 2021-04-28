import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

import { InfoButtonComponent } from './info-popup/info-button/info-button.component';
import { InfoComponent } from './info-popup/info/info.component';
import { InfoPopupDirective } from './info-popup/info-popup.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// added
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FrontPageComponent } from './FrontPage/frontpage.component';
import { TimelineP1Component } from './timeline-p1/timeline-p1.component';
import { TimelineP2Component } from './timeline-p2/timeline-p2.component';
// Fun Facts
import { FunFactsComponent } from './funfacts/funfacts.component';
import { FunFactsP1Component } from './funfacts-p1/funfacts-p1.component';
import { FunFactsP2Component } from './funfacts-p2/funfacts-p2.component';
import { FunFactsP3Component } from './funfacts-p3/funfacts-p3.component';
import { FunFactsP4Component } from './funfacts-p4/funfacts-p4.component';
import { FunFactsP5Component } from './funfacts-p5/funfacts-p5.component';
import { FunFactsP6Component } from './funfacts-p6/funfacts-p6.component';
import { FunFactsP7Component } from './funfacts-p7/funfacts-p7.component';
import { FunFactsP8Component } from './funfacts-p8/funfacts-p8.component';
import { FunFactsP9Component } from './funfacts-p9/funfacts-p9.component';
import { FunFactsP10Component } from './funfacts-p10/funfacts-p10.component';
import { FunFactsP11Component } from './funfacts-p11/funfacts-p11.component';
// popup of Fun Fun Facts
import { QuizComponent } from './Quiz-popup/Quiz/Quiz.component';
import { QuizButtonComponent } from './Quiz-popup/Quiz-button/Quiz-button.component';
import { QuizPopupDirective } from './Quiz-popup/Quiz-popup.directive';
// art detective
import { ArtDetectiveP1Component } from './artDetective/artDetective-p1/artDetective-p1.component';
import { ArtDetectiveP2Component } from './artDetective/artDetective-p2/artDetective-p2.component';
import { PlayComponent } from './artDetective/play-popup/play/play.component';
import { PlayButtonComponent } from './artDetective/play-popup/play-button/play-button.component';
import { PlayPopupDirective } from './artDetective/play-popup/play-popup.directive';

@NgModule({
  imports:      [
    BrowserModule,
    AngularFullpageModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    OverlayModule ],

  declarations: [ 
    AppComponent, 
    FrontPageComponent,
    TimelineP1Component, 
    TimelineP2Component, 
    FunFactsComponent,
    FunFactsP1Component,
    FunFactsP2Component,
    FunFactsP3Component,
    FunFactsP4Component,
    FunFactsP5Component,
    FunFactsP6Component,
    FunFactsP7Component,
    FunFactsP8Component,
    FunFactsP9Component,
    FunFactsP10Component,
    FunFactsP11Component,
    QuizComponent,
    QuizButtonComponent,
    QuizPopupDirective,
    InfoButtonComponent,
    InfoComponent,
    InfoPopupDirective,
    ArtDetectiveP1Component,
    ArtDetectiveP2Component,
    PlayComponent,
    PlayButtonComponent,
    PlayPopupDirective
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [InfoComponent, QuizComponent]
})
export class AppModule { }
