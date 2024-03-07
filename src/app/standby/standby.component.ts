import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';




@Component({
  standalone: true,
  imports: [IonicModule, FormsModule,],
  selector: 'app-standby',
  templateUrl: './standby.component.html',
  styleUrls: ['./standby.component.scss'],
})
export class StandbyComponent implements OnInit {

  searchInputValue!: string;



  constructor(
    private readonly _router: Router,
  ) { }

  ngOnInit() { }


}
