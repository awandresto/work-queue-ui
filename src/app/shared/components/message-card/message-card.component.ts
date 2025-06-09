import { Component, Input } from '@angular/core';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { MessageCard } from '../../types/account.types';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-message-card',
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    Tooltip
  ],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {
  @Input() message!: MessageCard;

  public get attachmentName(): string {
    return this.message.attachments?.join(', ') || '';
  }
}
