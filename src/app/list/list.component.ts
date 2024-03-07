import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AppService } from '../app.service';

@Component({
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, RouterLink,],
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(IonContent) public readonly ionContentElement!: IonContent;
  items$: Observable<any[]> = this._service.loadItems();
  public maxItem: number = 10;

  constructor(
    private readonly _service: AppService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.maxItem = 25;
  }

  ngAfterViewInit(): void {
    console.log(this.ionContentElement);
  }

  onIonInfinite($event: any) {
    console.log($event);


    setTimeout(() => {
      this.maxItem += 10;
      $event.target.complete();
    }, 800);
  }


}
