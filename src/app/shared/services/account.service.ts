import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Account, AccountGeneral } from '../types/account.types';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  getMyAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('assets/data/my-accounts.json')
      .pipe(delay(1200)); // Simulate network delay
  }

  getAccountGeneral(): Observable<AccountGeneral> {
    return this.httpClient.get<AccountGeneral>('assets/data/account-general.json')
      .pipe(delay(1000)); // Simulate network delay
  }
}
