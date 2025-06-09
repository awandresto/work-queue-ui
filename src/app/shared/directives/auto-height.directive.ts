import {
  Directive,
  ElementRef, HostListener,
  Input,
  NgZone
} from '@angular/core';

@Directive({
  selector: '[appAutoHeight]'
})
export class AutoHeightDirective {
  @Input() autoHeightBorder = 2; // border width of 2px
  @Input() autoHeightGap = 16; // gap of 16px

  constructor(private el: ElementRef,
              private ngZone: NgZone) {
  }

  @HostListener('window:resize')
  onResize(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.updateContainerHeight());
    });
  }

  @Input() set appAutoHeight(trigger: any) {
    if (!trigger) return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.updateContainerHeight());
    });
  }

  private updateContainerHeight(): void {
    const container = this.el.nativeElement;
    const border = this.autoHeightBorder;
    const gap = this.autoHeightGap;

    const children = Array.from(container.children) as HTMLElement[];
    const count = children.length;

    if (count === 0) {
      return;
    }

    const totalHeight = children.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.scrollHeight + border + (children.indexOf(currentValue) > 0 ? gap : 0),
      0
    );

    const halfHeight = Math.round(totalHeight / 2);

    // Determine extra huge message block into the start or end of the array to prevent perform the logic below
    let maxBlockHeight = Math.max(children[0]?.scrollHeight ?? 0, children[count - 1]?.scrollHeight ?? 0) + border;
    maxBlockHeight = maxBlockHeight >= halfHeight ? maxBlockHeight : 0;

    if (maxBlockHeight) {
      requestAnimationFrame(() => {
        container.style.height = `${maxBlockHeight}px`;
      });
      return;
    }

    let currentColumnHeight = 0;
    let firstColumnTotal = 0;
    for (let i = 0; i < count; i++) {
      currentColumnHeight += children[i].scrollHeight + border + (i > 0 ? gap : 0);

      // If the current column height exceeds half the total height, set the first column total and reset current height
      if ((currentColumnHeight >= halfHeight ||
          (i + 1 >= count / 2 &&
            currentColumnHeight + children[i + 1]?.scrollHeight + border + gap >= halfHeight)) &&
        !firstColumnTotal) {
        firstColumnTotal = currentColumnHeight;
        currentColumnHeight = 0;
      }
      // If reaches the last message and have a first column total, set the height...
      if (i === count - 1 && firstColumnTotal) {
        requestAnimationFrame(() => {
          // Determine the maximum height between the first column and the second column and set it as parent style
          container.style.height = `${Math.max(firstColumnTotal, currentColumnHeight)}px`;
        });
      }
    }
  }
}
