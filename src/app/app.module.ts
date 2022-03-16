import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveSubstListComponent } from './components/active-subst-list/active-subst-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ActiveSubstanceService} from "./services/active-substance.service";
import {RouterModule, Routes} from "@angular/router";
import { SearchComponent } from './components/search/search.component';
import { AddActiveSubstComponent } from './components/add-active-subst/add-active-subst.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {path: 'activesubstance/search/:searchCode', component: ActiveSubstListComponent},
  {path: 'activesubstance/name/:name', component:ActiveSubstListComponent},
  {path: 'activesubstance', component: ActiveSubstListComponent},
  {path: 'activesubstance/add', component: AddActiveSubstComponent},
  {path: '', redirectTo: '/activesubstance', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubstListComponent,
    SearchComponent,
    AddActiveSubstComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [ActiveSubstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
