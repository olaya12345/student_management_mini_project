import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-ajout-etudiants',
  templateUrl: './ajout-etudiants.component.html',
  styleUrls: ['./ajout-etudiants.component.css']
})
export class AjoutEtudiantsComponent {
  e:any={
    nom:"",
    prenom:"",
    email:"",
    tel:"",
    date_naissance:"",
    filiere:"",
  };
  constructor(private etudiant:EtudiantsService,private router:Router) {}
  addEtudiant():void{
    this.etudiant.addEtudiants(this.e).subscribe(() => {
      alert('Etudiant ajouté avec succés!');
      this.router.navigate(['/etudiants']);
  
    });
  }
}