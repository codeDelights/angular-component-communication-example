import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isHidden: Subject<boolean> = new Subject();

  constructor() { }

  getIsHidden() {
    return this.isHidden.asObservable();
  }
}
