import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MessageCard } from '../../shared/types/account.types';
import { Card } from 'primeng/card';
import { BehaviorSubject, debounceTime, Subject } from 'rxjs';
import { MessageCardComponent } from '../../shared/components/message-card/message-card.component';
import { AutoHeightDirective } from '../../shared/directives/auto-height.directive';

@Component({
  selector: 'app-communication',
  imports: [
    Card,
    MessageCardComponent,
    AutoHeightDirective
  ],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent implements OnInit {
  @Input() messages$: BehaviorSubject<MessageCard[]> = new BehaviorSubject<MessageCard []>([]);

  public filteredMessages: MessageCard[] = [];
  public filterValue$: Subject<string> = new Subject<string>();

  public ngOnInit(): void {
    this.messages$.subscribe(messages => {
      this.filteredMessages = [...messages];
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

  public onFilterMessages(event: Event): void {
    const value = (event.target as HTMLInputElement).value?.toLowerCase() as string;
    this.filterValue$.next(value);
  }
}
