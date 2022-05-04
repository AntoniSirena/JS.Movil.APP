import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addSectionData(data: any) {
    localStorage.setItem('sectionData', JSON.stringify(data));
  }

}
