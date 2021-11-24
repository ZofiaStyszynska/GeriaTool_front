import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { ActiveSubstListComponent } from './components/active-subst-list/active-subst-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ActiveSubstanceService} from "./services/active-substance.service";
import {RouterModule, Routes} from "@angular/router";
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'search/:searchCode', component: ActiveSubstListComponent},
  {path: 'active-substances', component: ActiveSubstListComponent},
  {path: '', redirectTo: '/active-substances', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ActiveSubstListComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ActiveSubstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
