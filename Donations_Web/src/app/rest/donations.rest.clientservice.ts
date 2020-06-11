import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Donation } from '../model/donation';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DonationsRestClientService {

    private SERVICE_URL = 'http://localhost:8080/Donations/rest/DonationsService/donations';

    constructor(private http: HttpClient) { }

    saveDonation(donation: Donation): Observable<any> {
        return this.http.post<any>(this.SERVICE_URL, donation);
    }

    getDonationsCount(): Observable<number> {
        return this.http.get<number>(this.SERVICE_URL + '/count');
    }

    getDonations(filter: string, sortOrder: string, pageNumber: number, pageSize: number): Observable<Donation[]> {
        return this.http.get<Donation[]>(this.SERVICE_URL + '/page', {
            params: new HttpParams()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }
}
