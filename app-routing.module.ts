import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantsComponent } from './components/list-etudiants/list-etudiants.component';
import { AjoutEtudiantsComponent } from './components/ajout-etudiants/ajout-etudiants.component';
import { EditEtudiantsComponent } from './components/edit-etudiants/edit-etudiants.component';

const routes: Routes = [
  {path:"",redirectTo:"etudiants",pathMatch:"full"},
  {path:"etudiants",component:ListEtudiantsComponent},
  {path:"add-etudiants",component:AjoutEtudiantsComponent},
  {path:"edit-etudiants",component:EditEtudiantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
