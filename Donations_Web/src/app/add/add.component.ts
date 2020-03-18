import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../app.dataservice';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  donationForm: FormGroup;
  private dataService: DataService;

  constructor(private formBuilder: FormBuilder, dataService: DataService) {
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
    const donation = {
      name: this.donationForm.get('name').value, surname: this.donationForm.get('surname').value,
      amount: this.donationForm.get('amount').value, currency: this.donationForm.get('currency').value
    };

    this.dataService.saveDonation(donation).subscribe(data => console.log(data));
    this.donationForm.reset();

    console.warn('Your donation has been submitted', donation);
  }

}
