import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { ActiveSubstListComponent } from './components/active-subst-list/active-subst-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ActiveSubstanceService} from "./services/active-substance.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ActiveSubstListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ActiveSubstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
