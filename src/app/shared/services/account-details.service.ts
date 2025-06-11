import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Account, AccountDetailsData } from '../types/account.types';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private httpClient: HttpClient) {}

  getMyAccountDetails(url: string): Observable<AccountDetailsData> {
    return this.httpClient.get<AccountDetailsData>(`assets/data/${url}.json`)
      .pipe(delay(1200)); // Simulate network delay
  }
}
