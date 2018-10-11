import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  actions = new Array<(oldLang:string, currentLang:string)=>void>();
  currentLang = 'nl';

  constructor() { }

  toggleLanguage(){
    const oldLang = this.currentLang;
    this.currentLang = (this.currentLang === 'nl')? 'fr' : 'nl'
    this.actions.forEach(action => {
      action(oldLang, this.currentLang);
    })
  }

  onChange(action: (oldLang:string, currentLang:string)=>void){
    this.actions.push(action);
  }
}
