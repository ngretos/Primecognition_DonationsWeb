import { Component, OnInit } from '@angular/core';
import { Donation } from '../../donation';
import { DataService } from '../../app.dataservice';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-donationslist',
  templateUrl: './donationslist.component.html',
  styleUrls: ['./donationslist.component.css']
})
export class DonationslistComponent implements OnInit {

  donations = new Array<Donation>();

  constructor(dataService: DataService) {
    dataService.getDonations().subscribe(response => {
      this.donations = response.map(item => {
        return new Donation(item.name, item.surname, item.amount, item.currency);
      });
    });
  }


  getDonations() {
    return this.donations;
  }

  ngOnInit(): void {
  }

}
