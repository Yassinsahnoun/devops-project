import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { StageService } from '../stage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pageadmin',
  templateUrl: './pageadmin.component.html',
  styleUrls: ['./pageadmin.component.css']
})
export class PageadminComponent {

  studentId: number = 0;
  etudiant: any;
  
  public etudiants: Etudiant[] = [];
  
  etudiantId: number | undefined;
  etudiantToUpdate = {
    id:0,
    nom: "",
    prenom: "",
    niveau: "",
    adresse: "",
    email: "",
    titresujet: "",
    validation: "",
  }
  

  constructor(private StageService: StageService, private router: Router) { }

  ngOnInit(): void {
   this.getEtudiants();
  }

  public getEtudiants(): void {
    this.StageService.getEtudiantList().subscribe(
    (response: Etudiant[]) => {
      this.etudiants = response;
    },
     (error: HttpErrorResponse ) => {
      alert(error.message);
     }
    );
  }


  edit(etudiant: any){
    this.etudiantToUpdate = etudiant;
  }
  
  public updateEtudiant(){
    this.StageService.updateEtudiant(this.etudiantToUpdate).subscribe(
      (response: Etudiant) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onDeleteEtudiant(etudiant: Etudiant): void {
    this.StageService.deleteEtudiant(etudiant.id).subscribe(
      (response: any) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
   public searchStudent(){
    this.StageService.getEtudiantById(this.studentId).subscribe(
      data => {
        this.etudiant = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  goToPage(){
    this.router.navigate(['/home']);
  }
}
