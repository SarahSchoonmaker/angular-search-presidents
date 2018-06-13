import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CsvService } from "angular2-json2csv";
import { President } from '../model/president.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presidents: Array<President> = new Array<President>();
  response: President[];
  sortOrderAsc: boolean = true;
  searchText: string;
  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.refreshData();

  }

  refreshData() {

    this.service.getJSON().subscribe(
      resp => {
        this.response = JSON.parse(resp._body);
        this.response.forEach(p => this.presidents.push(p));
      });
  }

  sortBy = function (key: string, order: boolean = false) {
    this.sortKey = key;
    if (!order) {
      this.sortOrderAsc = !this.sortOrderAsc;
    }
    else {
      this.sortOrderAsc = this.sortOrderAsc;
    }
    console.log(this.sortOrderAsc + ":" + key);
    switch (key) {
      case 'name':
        this.presidents.sort((a: President, b: President) => {
          if (a.name < b.name) {
            return this.sortOrderAsc ? -1 : 1;
          } else if (a.name > b.name) {
            return this.sortOrderAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case 'birthPlace':
        this.presidents.sort((a: President, b: President) => {
          if (a.birthPlace < b.birthPlace) {
            return this.sortOrderAsc ? -1 : 1;
          } else if (a.birthPlace > b.birthPlace) {
            return this.sortOrderAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case 'deathPlace':
        this.presidents.sort((a: President, b: President) => {
          if (a.deathPlace < b.deathPlace) {
            return this.sortOrderAsc ? -1 : 1;
          } else if (a.deathPlace > b.deathPlace) {
            return this.sortOrderAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case 'birthDay':
        this.presidents.sort((a: President, b: President) => {
          if (a.birthDay < b.birthDay) {
            return this.sortOrderAsc ? -1 : 1;
          } else if (a.birthDay > b.birthDay) {
            return this.sortOrderAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case 'deathDay':
        this.presidents.sort((a: President, b: President) => {
          if (a.deathDay < b.deathDay) {
            return this.sortOrderAsc ? -1 : 1;
          } else if (a.deathDay > b.deathDay) {
            return this.sortOrderAsc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
    }
  }

  search = function () {
    this.presidents.splice(0, this.presidents.length);
    this.response.filter(v => v.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1).forEach(v => this.presidents.push(v));
  }

}
