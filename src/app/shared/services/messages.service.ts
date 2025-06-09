import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { MessageCard } from '../types/account.types';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient) {}

  getMessages(): Observable<MessageCard[]> {
    return this.httpClient.get<MessageCard[]>('assets/data/messages.json')
      .pipe(delay(800)); // Simulate network delay
  }
}
