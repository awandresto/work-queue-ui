import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { WorkQueueList } from '../types/work-queue.types';

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService {

  constructor(private httpClient: HttpClient) {}

  getWorkQueue(): Observable<WorkQueueList> {
    return this.httpClient.get<WorkQueueList>('assets/data/work-queue.json')
      .pipe(delay(950)); // Simulate network delay
  }
}
