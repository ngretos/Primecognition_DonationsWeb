import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donation } from './donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVICE_URL = 'http://localhost:8080/Donations/rest/DonationsService/donations';

  constructor(private http: HttpClient) { }

  saveDonation(donation: Donation): Observable<any> {
    return this.http.post<any>(this.SERVICE_URL, donation);
  }

  getDonations() {
    return this.http.get<Donation[]>(this.SERVICE_URL);
  }
}
