import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Account } from '../types/account.types';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('assets/data/accounts.json')
      .pipe(delay(1200)); // Simulate network delay
  }
}
