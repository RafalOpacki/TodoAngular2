import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  addToLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getFromLocalStorage(key): any {
    return JSON.parse(localStorage.getItem(key));
  }

  constructor() {}
}
