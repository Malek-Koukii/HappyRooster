import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingSpinner = new BehaviorSubject<boolean>(false);
  isSpinner$ = this.loadingSpinner.asObservable();

  startLoadingSpinner() {
    this.loadingSpinner.next(true);
  }

  stopLoadingSpinner() {
    this.loadingSpinner.next(false);
  }
}
