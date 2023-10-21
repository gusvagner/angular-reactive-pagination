import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PassengerService {
    http = inject(HttpClient);

    getPassengerData(page: number): Observable<any> {
        return this.http.get<any>(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
    }
}