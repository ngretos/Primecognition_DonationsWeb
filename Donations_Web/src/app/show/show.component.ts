import { Component, OnInit } from '@angular/core';
import { DonationslistComponent } from './donationslist/donationslist.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  donationsList: DonationslistComponent;

  constructor(donationsList: DonationslistComponent) {
    this.donationsList = donationsList;
  }

  ngOnInit(): void {
  }

  showDonations() {
    return this.donationsList.getDonations();
  }
}
