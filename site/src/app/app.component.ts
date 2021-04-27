import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor(private renderer: Renderer2) {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['welcome', 'timeline', 'funfacts', 'artdetective'],
      menu: '#menu',
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}