import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonationsRestClientService } from '../rest/donations.rest.clientservice';
import { Donation } from '../model/donation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  donationForm: FormGroup;

  private dataService: DonationsRestClientService;

  constructor(private formBuilder: FormBuilder, dataService: DonationsRestClientService) {
    this.dataService = dataService;
    this.donationForm = this.formBuilder.group({
      name: '',
      surname: '',
      amount: '',
      currency: ''
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const donation = new Donation(this.donationForm.get('name').value, this.donationForm.get('surname').value,
      this.donationForm.get('amount').value, this.donationForm.get('currency').value);

    this.dataService.saveDonation(donation).subscribe(data => console.log(data));
    this.donationForm.reset();

    console.warn('Your donation has been submitted', donation);
  }

}
