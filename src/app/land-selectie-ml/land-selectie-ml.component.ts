import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

// functional autocomplete om landen te zoeken
// gebruikt drs-autocomplete.component
// GEEFT DOOR AAN drs-autocomplete
//  lijst van landen als string[]
//  een geselecteerde value, default ''
//  een unieke ID
// ONTVANGT VAN naar drs-autocomplete
//  Indien een geldig land geselecteerd wordt ontvangen we dit
// EXTRA (zou eigenlijk in tussencomponent kunnen...): multilanguage
//  luister naar taalwijziging, indien taal wijzigt:
//    - vertaalt de lijst van mogelijke landen voor de autocomplate
//    - vertaalt de geselecteerde waarde indien er een is

@Component({
  selector: 'app-land-selectie-ml',
  templateUrl: './land-selectie-ml.component.html',
  styleUrls: ['./land-selectie-ml.component.css']
})
export class LandSelectieMlComponent implements OnInit {
  private mlLanden: any[] = [
    {code:'1', nl:'Belgie', fr:'Belgique'},
    {code:'2', nl:'Belize', fr:'BelizeFR'},
    {code:'3', nl:'Frankrijk', fr:'France'},
    {code:'4', nl:'Duitsland', fr:'Allemagne'}
  ];

  geselecteerdLand = '';
  vertaaldeLanden: string[];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.loadForLanguage(undefined, this.translateService.currentLang);
    this.translateService.onChange((oldLang:string, currentLang:string)=>{
      this.loadForLanguage(oldLang, currentLang);
    });
  }

  private loadForLanguage(oldLang:string, currentLang:string): void{
      this.vertaaldeLanden = new Array();
      this.vertaaldeLanden = this.mlLanden.map(mlLand => {
        return mlLand[currentLang]
      });
      if(!!oldLang && !!this.geselecteerdLand){
        // translate selected value if possible
        this.geselecteerdLand = this.mlLanden.find(mlLand => {
          return mlLand[oldLang] === this.geselecteerdLand
        })[currentLang];
      }
      console.log('this.vertaaldeLanden',JSON.stringify(this.vertaaldeLanden));
  }

  public landGeselecteerd(land: string){
    this.geselecteerdLand = land;
    console.log('mlgeselecteerdLand:', this.geselecteerdLand);
  }
}
