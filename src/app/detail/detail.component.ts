import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppService } from '../app.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LevelColorPipe } from '../level-color.pipe';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [IonicModule, CommonModule, LevelColorPipe,],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {

  item!: any;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _service: AppService
  ) { }



  async ionViewWillEnter() {


    this.item = this._route.snapshot.data['item'];  //await firstValueFrom(this._service.loadItemsById(id));
    console.log(this.item);



  }

  /*
  getLevelColor(level: string): string {
    switch (level) {
      case '0': return 'primary';
      case '1': return 'secondary';
      case '2': return 'tertiary';
      case '3': return 'danger';
      default: return 'medium';
    }
  }
  */

}