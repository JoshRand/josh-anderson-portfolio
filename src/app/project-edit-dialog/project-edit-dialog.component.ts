import { Component, OnInit,Inject, ViewEncapsulation} from '@angular/core';
import { PortfolioService } from '../services/portfolio.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from "../model/project"
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.css'],
  encapsulation:ViewEncapsulation.None,
})

export class ProjectEditDialogComponent implements OnInit {
  // project to edit placeholder
  project: Project;
  projectEditForm = this.formBuilder.group({
      
    })
  constructor(
    public dialogRef: MatDialogRef<ProjectEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private portfolioService: PortfolioService,
    private formBuilder: FormBuilder, 
    ) 
    { 
      
    }

  ngOnInit(): void {
    // place project from dialog data into project
    this.project = this.data;
    // Setup the control fields for the Form
    this.projectEditForm.addControl("title", new FormControl(this.project.title,Validators.required));
    this.projectEditForm.addControl("description", new FormControl(this.project.description,Validators.required));
    this.projectEditForm.addControl("technologies", new FormControl({value:this.project.technologies,disabled:false},Validators.required));
    this.projectEditForm.addControl("github", new FormControl(this.project.github,Validators.required));
    this.projectEditForm.addControl("image", new FormControl(this.project.image,Validators.required));
    this.projectEditForm.addControl("demo", new FormControl(this.project.demo,Validators.required));
    this.projectEditForm.addControl("tiles", new FormControl(this.project.tiles,Validators.required));
    this.projectEditForm.addControl("slides", new FormControl(this.project.slides,Validators.required));
    this.projectEditForm.addControl("content", new FormControl(this.project.tiles[1].content, Validators.required));

  }

  onSubmit()
  {
    //submit project changed to backend
   
    this.project.tiles[1].content = this.projectEditForm.controls['content'].value;
    this.project.description = this.projectEditForm.controls['description'].value;
    if(!this.projectEditForm.controls['technologies'].untouched)
      this.project.technologies = this.projectEditForm.controls['technologies'].value.split(",");
    console.log("Submitted edited project", this.project);
    this.portfolioService.saveProject(this.project).subscribe(data => this.project = data, 
      ()=>{});
  }

}
