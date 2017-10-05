import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-datatables-registers',
  templateUrl: './datatables-registers.component.html',
  styleUrls: ['./datatables-registers.component.css']
})
export class DatatablesRegistersComponent implements OnInit {
  public data: any[];
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'dni';
  public sortOrder = 'asc';

  constructor(private _http: Http) { }

  ngOnInit(): void {
    this._http.get("assets/data.json").subscribe(
      (data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 2000);
      });
  }
}
