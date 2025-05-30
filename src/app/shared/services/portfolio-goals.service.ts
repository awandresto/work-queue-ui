import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { PortfolioGoals } from '../types/bar.types';

@Injectable({
  providedIn: 'root'
})
export class PortfolioGoalsService {

  constructor(private httpClient: HttpClient) {}

  getPortfolioGoals(): Observable<PortfolioGoals> {
    return this.httpClient.get<PortfolioGoals>('assets/data/portfolio-goals.json')
      .pipe(delay(750)); // Simulate network delay
  }
}
