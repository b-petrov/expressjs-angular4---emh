import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-orders-tab-payment-details',
	templateUrl: './payment-details.component.html',
	styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

	firstName = new FormControl('', [
		Validators.required
	]);

	lastName = new FormControl('', [
		Validators.required
	]);

	address1 = new FormControl('', [
		Validators.required
	]);

	city = new FormControl('', [
		Validators.required
	]);

	country = new FormControl('', [
		Validators.required
	]);

	region_state = new FormControl('', [
		Validators.required
	]);

	constructor() { }

	ngOnInit() {
	}

}
