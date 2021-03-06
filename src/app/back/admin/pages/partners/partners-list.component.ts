import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { TableData } from '../../../../helper/table-data/table-data';

const partnersList = [
	{ partner_name: 'Slide 1', status: 'Enabled' },
	{ partner_name: 'Slide 2', status: 'Enabled' },
	{ partner_name: 'Slide 3', status: 'Enabled' },
	{ partner_name: 'Slide 4', status: 'Enabled' },
	{ partner_name: 'Slide 5', status: 'Enabled' }
];

@Component({
	selector: 'admin-partners-list',
	templateUrl: './partners-list.component.html',
	styleUrls: [ './partners-list.component.scss' ]
})
export class PartnersListComponent implements OnInit {

	displayedColumns = ['partner_name', 'status', 'action'];

	tableData = new TableData();
	dataSource: PartnersDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(partnersList);
		this.dataSource = new PartnersDataSource(this.tableData);
	}
}

export class PartnersDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}