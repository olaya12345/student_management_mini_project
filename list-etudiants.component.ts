import { Component, OnInit } from "@angular/core";
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {
  etudiants: any[] = [];
  editableEtudiants: any[] = [];
  paginatedEtudiants: any[] = [];
  editableRows: boolean[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  filteredEtudiants: any[] = [];
  searchTerm: string = "";
  constructor(private etudiant: EtudiantsService) { }
  ngOnInit(): void {
    this.fetchEtudiants();
  }
  fetchEtudiants(): void {
    this.etudiant.getEtudiants().subscribe((data) => {
      this.etudiants = data;
      this.calculatePagination();
    });
  }
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredEtudiants.length / this.pageSize);
    this.updatePaginatedEtudiants();
  }
  updatePaginatedEtudiants(): void {
    const sourceArray = this.searchTerm.trim() ? this.filteredEtudiants : this.etudiants;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEtudiants = sourceArray.slice(startIndex, endIndex);
  }
  searchStudents(): void {
    if (this.searchTerm.trim() === "") {
      this.filteredEtudiants = this.etudiants;
    } else {
      this.filteredEtudiants = this.etudiants.filter((student) =>
        student.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; 
    this.calculatePagination();
  }
  enableEditMode(index: number): void {
    this.editableRows[index] = true;
    this.editableEtudiants[index] = { ...this.etudiants[index] };
    console.log("Editable data:", this.editableEtudiants[index]);
  }


  cancelEditMode(index: number): void {
    this.editableRows[index] = false;
    this.editableEtudiants[index] = { ...this.etudiants[index] };
  }

  saveChange(index: number, id: number): void {
    const updatedEtudiant = this.editableEtudiants[index];
    this.etudiant.updateEtudiant(id, updatedEtudiant).subscribe(() => {
      this.etudiants[index] = { ...updatedEtudiant };
      this.editableRows[index] = false;
      this.updatePaginatedEtudiants();
    });
  }
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedEtudiants();
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedEtudiants();
    }
  }
  deleteEtudiant(id: number): void {
    this.etudiant.deleteEtudiant(id).subscribe(() => {
      this.fetchEtudiants();
    });
  }
}



