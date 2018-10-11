import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  language: string;

  constructor(public translateService: TranslateService){
  }

  toggleLanguage(){
    this.translateService.toggleLanguage();
  }
}
