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
import { TimelineP1Component } from './timeline-p1/timeline-p1.component';
import { TimelineP2Component } from './timeline-p2/timeline-p2.component';
import { TimelineP3Component } from './timeline-p3/timeline-p3.component';
import { FunFactsP1Component } from './funfacts-p1/funfacts-p1.component';
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
    TimelineP1Component,
    TimelineP2Component,
    TimelineP3Component,
    FunFactsP1Component,
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
  entryComponents: [InfoComponent, PlayComponent]
})
export class AppModule { }