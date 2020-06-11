import { DataSource } from '@angular/cdk/table';
import { Donation } from '../model/donation';
import { BehaviorSubject, Observable, of, never } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { DonationsRestClientService } from '../rest/donations.rest.clientservice';

export class DonationsDataSource implements DataSource<Donation> {

    private donationsSubject = new BehaviorSubject<Donation[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    // private count: number;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private donationsRestService: DonationsRestClientService) { }

    connect(collectionViewer: CollectionViewer): Observable<Donation[]> {
        return this.donationsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.donationsSubject.complete();
        this.loadingSubject.complete();
    }

    getDonations(filter = '', orderBy = '', pageNumber = 1, pageSize = 5) {

        this.loadingSubject.next(true);
        this.donationsRestService.getDonations(filter, orderBy, pageNumber, pageSize).pipe(
            /*this.catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))*/)
            .subscribe(donations => this.donationsSubject.next(donations));
    }

    getDonationsCount(): number {
        let count: number;
        this.donationsRestService.getDonationsCount().subscribe(c => count = c);
        return 0;
    }
}
