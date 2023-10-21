import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { PassengerService } from './data-access/passenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  passengerService = inject(PassengerService);
  currentPage$ = new BehaviorSubject<number>(1);

  currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) => this.passengerService.getPassengerData(currentPage)),
    tap(value => console.log(value)),
    map((res: any) => res.data)
  )

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    if (this.currentPage$.value > 1) 
      this.currentPage$.next(this.currentPage$.value - 1);
  }
  

}
