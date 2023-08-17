import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stage } from '../stage';
import { Router } from '@angular/router';
import { StageService } from '../stage.service';
import { Etudiant } from '../etudiant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pageetud',
  templateUrl: './pageetud.component.html',
  styleUrls: ['./pageetud.component.css']
})
export class PageetudComponent {

  public stages: Stage[] = [];
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
   this.getStages();
  }
  public getStages(): void {
    this.StageService.getStagesList().subscribe(
    (response: Stage[]) => {
      this.stages = response;
    },
     (error: HttpErrorResponse ) => {
      alert(error.message);
     }
    );
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

  public onAddEtudiant(addEtudForm: NgForm): void {
    this.StageService.addEtudiant(addEtudForm.value).subscribe(
      (response: Etudiant) => {
        console.log(response);
        this.getEtudiants();
        addEtudForm.reset();
        alert("Votre choix est enregistré, Merci.");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addEtudForm.reset();
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
      () => {
        console.log("Etudiant supprimé avec succés");
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

  

  
  
 
  

