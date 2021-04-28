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
import { FunFactsP1Component } from './funfacts-p1/funfacts-p1.component';

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
    FunFactsP1Component,
    InfoButtonComponent,
    InfoComponent,
    InfoPopupDirective ],
  bootstrap:    [ AppComponent ],
  entryComponents: [InfoComponent]
})
export class AppModule { }
