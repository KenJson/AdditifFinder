import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

//todo: check les photos, et ensuite qury param this route snapshot

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IonicModule, FormsModule, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})



export class SearchComponent implements OnInit {
  searchInputValue: string = '';

  dataService: any;
  data: any;

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
  ) { }

  get(): Observable<any> {
    return this._http.get(`./assets/db${this.searchInputValue}.json`);
  }

  onSearch() {
    this.dataService.getDatabase(this.searchInputValue).subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit() { }

  search() {
    console.log(this.searchInputValue);
    this._router.navigateByUrl(`list/${this.searchInputValue}`);
  }

}
