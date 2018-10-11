import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrsAutocompleteComponent } from './drs-autocomplete/drs-autocomplete.component';
import { LandSelectieComponent } from './land-selectie/land-selectie.component';
import { LandSelectieMlComponent } from './land-selectie-ml/land-selectie-ml.component';

@NgModule({
  declarations: [
    AppComponent,
    DrsAutocompleteComponent,
    LandSelectieComponent,
    LandSelectieMlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
