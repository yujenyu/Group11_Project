import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  AfterViewInit,
  Host,
  ViewContainerRef,
} from '@angular/core';
import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PlayButtonComponent } from './play-button/play-button.component';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appPlayPopup]',
})
export class PlayPopupDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() appPlayPopup!: TemplateRef<object>;
  @Input() label!: HTMLElement;
  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  constructor(
    @Host() private playButton: PlayButtonComponent,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.createOverlay();
  }

  ngAfterViewInit(): void {
    this.playButton.playButtonClicked.asObservable().subscribe(() => {
      this.attachOverlay();
    });
  }

  ngOnDestroy(): void {
    this.detachOverlay();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private createOverlay(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.label)
      .withPositions([
        new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
      ])
      .withPush(false);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
    });

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.detachOverlay();
      });
  }

  private attachOverlay(): void {
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new TemplatePortal(this.appPlayPopup, this.vcr);

      this.overlayRef.attach(periodSelectorPortal);
    }
  }

  private detachOverlay(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
