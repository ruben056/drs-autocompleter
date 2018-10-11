import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-selectie',
  templateUrl: './land-selectie.component.html',
  styleUrls: ['./land-selectie.component.css']
})
export class LandSelectieComponent implements OnInit {

  landenFr = ['Belgique', 'BelizeFR', 'France', 'Allemagne']
  landenNl = ['Belgie', 'Belize', 'Frankrijk', 'Duitsland'];

  constructor() { }

  ngOnInit() {
  }

  landGeselecteerd(land: any):void{
    console.log('land geselecteerd :', land);
  }

}
