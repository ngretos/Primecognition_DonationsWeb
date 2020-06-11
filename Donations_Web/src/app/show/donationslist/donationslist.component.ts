import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { DonationsDataSource } from 'src/app/data/donationsdatasource';
import { DonationsRestClientService } from 'src/app/rest/donations.rest.clientservice';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-donationslist',
    templateUrl: './donationslist.component.html',
    styleUrls: ['./donationslist.component.css']
})
export class DonationslistComponent implements OnInit {

    donationsCount: number;
    dataSource: DonationsDataSource;
    columnsToDisplay = ['name', 'surname', 'amount', 'currencyStr'];

    // constructor(restService: DonationsRestClientService) {
    //     restService.getDonations('', '', 1, 5).subscribe(response => {
    //         this.donations = response.map(item => {
    //             return new Donation(item.name, item.surname, item.amount, item.currency);
    //         });
    //     });
    // }

    constructor(private restService: DonationsRestClientService) {
    }

    ngOnInit(): void {
        this.dataSource = new DonationsDataSource(this.restService);
        this.donationsCount = this.dataSource.getDonationsCount();
        this.dataSource.getDonations();
    }

}
