import { Component, OnInit } from '@angular/core';
import { StageService } from '../stage.service';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Stage } from '../stage';
@Component({
  selector: 'app-pageprof',
  templateUrl: './pageprof.component.html',
  styleUrls: ['./pageprof.component.css'],
  providers: [StageService]
})
export class PageprofComponent implements OnInit{

  public stages: Stage[] = [];
  
  stageId: number | undefined;
  stageToUpdate = {
    id:0,
    title:"",
    description:"",
    niveau: "", 
    duree: "",
    professeur: "",
    entreprise: ""
  }
  

  constructor(private StageService: StageService,
    private router: Router) { }

  ngOnInit(): void {
   this. getStages();
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

  public onAddStage(addForm: NgForm): void {
    this.StageService.addStage(addForm.value).subscribe(
      (response: Stage) => {
        console.log(response);
        this.getStages();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  edit(stage: any){
    this.stageToUpdate = stage;
  }
  
  public updateStage(){
    this.StageService.updateStage(this.stageToUpdate).subscribe(
      (response: Stage) => {
        console.log(response);
        this.getStages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onDeleteStage(stage: Stage): void {
    this.StageService.deleteStage(stage.id).subscribe(
      () => {
        console.log("Stage supprimé avec succés");
        this.getStages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  goToPage(){
    this.router.navigate(['/home']);
  }
  
}
