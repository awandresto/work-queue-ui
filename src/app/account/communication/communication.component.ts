import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MessageCard } from '../../shared/types/account.types';
import { Card } from 'primeng/card';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-communication',
  imports: [
    Card,
    TitleCasePipe,
    UpperCasePipe
  ],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent implements OnInit {
  @Input() messages$: BehaviorSubject<MessageCard[]> = new BehaviorSubject<MessageCard []>([]);

  public filteredMessages: MessageCard[] = [];
  public filterValue$: Subject<string> = new Subject<string>();

  @ViewChild('messageContainer', { static: true }) messageContainer!: ElementRef<HTMLDivElement>;

  public ngOnInit(): void {
    this.messages$.subscribe(messages => {
      this.filteredMessages = [...messages];
      setTimeout(() => this.updateContainerHeight());
    });

    this.filterValue$
      .pipe(debounceTime(300))
      .subscribe(value => {
        value = value?.toLowerCase() || '';

        if (value) {
          this.filteredMessages = [...this.messages$.getValue().filter(message =>
            message.title.toLowerCase().includes(value) ||
            message.content.toLowerCase().includes(value) ||
            message.author.toLowerCase().includes(value) ||
            message.date.toLowerCase().includes(value)
          )];
        } else {
          this.filteredMessages = [...this.messages$.getValue()];
        }
      });
  }

  @HostListener('window:resize', []) onResize() {
    setTimeout(() => this.updateContainerHeight());
  }

  public onFilterMessages(event: Event): void {
    const value = (event.target as HTMLInputElement).value?.toLowerCase() as string;
    this.filterValue$.next(value);
  }

  private updateContainerHeight () {
    const messageContainer = this.messageContainer.nativeElement;

    const setHeight = (value: number) => {
      requestAnimationFrame(() => {
        messageContainer.setAttribute('style', `height: ${value}px`);
      })
    }

    const border = 2; // border width of 2px
    const gap = 16; // gap of 16px

    const children = Array.from(messageContainer.children) as HTMLElement[];
    const messageCount = children.length;

    if (messageCount === 0) {
      return;
    }

    const totalHeight = children.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.scrollHeight + border + (children.indexOf(currentValue) > 0 ? gap : 0),
      0
    );
    const halfHeight = Math.round(totalHeight / 2);

    // Determine extra huge message block into the start or end of the array to prevent perform the logic below
    let maxHeightBlock = Math.max(children[0].scrollHeight, children[messageCount - 1].scrollHeight) + border;
    maxHeightBlock = maxHeightBlock >= halfHeight ? maxHeightBlock : 0;
    if (maxHeightBlock) {
      setHeight(maxHeightBlock);
      return;
    }

    let currentColumnHeight = 0;
    let firstColumnTotal= 0;
    for (let i = 0; i < messageCount; i++) {
      currentColumnHeight += children[i].scrollHeight + border + (i > 0 ? gap : 0);

      // If the current column height exceeds half the total height, set the first column total and reset current height
      if ((currentColumnHeight >= halfHeight ||
        (i + 1 >= messageCount / 2 &&
          currentColumnHeight + children[i + 1]?.scrollHeight + border + gap >= halfHeight)) && !firstColumnTotal) {
        firstColumnTotal = currentColumnHeight;
        currentColumnHeight = 0; // Reset for the second column
      }
      // If reaches the last message and have a first column total, set the height...
      if (i === messageCount - 1 && firstColumnTotal) {
        requestAnimationFrame(() => {
          // Determine the maximum height between the first column and the second column and set it as parent style
          setHeight(Math.max(firstColumnTotal, currentColumnHeight));
        });

      }
    }
  }
}
