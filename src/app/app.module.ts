import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule, DecimalPipe, AsyncPipe} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ActiveSubstListComponent } from './components/active-subst-list/active-subst-list.component';
import {ActiveSubstanceService} from "./services/active-substance.service";
import { SearchComponent } from './components/search/search.component';
import { AddActiveSubstComponent } from './components/add-active-subst/add-active-subst.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MedicinesListComponent } from './components/medicines-list/medicines-list.component';
import {MedicineService} from "./services/medicine.service";
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { PatientComponent } from './components/patient/patient.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";




const routes: Routes = [
  {path: 'activesubstance/search/:searchCode', component: ActiveSubstListComponent},
  {path: 'activesubstance/name/:name', component:ActiveSubstListComponent},
  {path: 'patient', component:PatientComponent},
  {path: 'medicine', component:MedicinesListComponent},
  {path: 'activesubstance', component: ActiveSubstListComponent},
  {path: 'activesubstance/add', component: AddActiveSubstComponent},
  {path: '', redirectTo: '/medicine', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubstListComponent,
    SearchComponent,
    AddActiveSubstComponent,
    ToolbarComponent,
    MedicinesListComponent,
    AddMedicineComponent,
    PatientComponent,
    UpdateMedicineComponent,

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
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [ActiveSubstanceService, MedicineService, DecimalPipe, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
