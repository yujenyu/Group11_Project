import {Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;
  welcome: any;

  constructor(private renderer: Renderer2) {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['welcome', 'timeline', 'funfacts', 'artdetective', 'aboutpage'],
      menu: '#menu',
      sectionsColor: ['white', '#4BBFC3', '#2f414f', 'whitesmoke', 'whitesmoke'],

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
