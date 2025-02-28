import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutEtudiantsComponent } from './components/ajout-etudiants/ajout-etudiants.component';
import { ListEtudiantsComponent } from './components/list-etudiants/list-etudiants.component';
import { EditEtudiantsComponent } from './components/edit-etudiants/edit-etudiants.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AjoutEtudiantsComponent,
    ListEtudiantsComponent,
    EditEtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
