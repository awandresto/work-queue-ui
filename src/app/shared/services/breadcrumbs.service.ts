import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private _toShowBreadcrumbs: boolean = false;

  constructor() {}

  public get toShowBreadcrumbs(): boolean {
    return this._toShowBreadcrumbs;
  }

  public set toShowBreadcrumbs(value: boolean) {
    this._toShowBreadcrumbs = value;
  }
}
