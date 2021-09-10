import { Component, OnInit,Inject, ViewEncapsulation} from '@angular/core';
import { PortfolioService } from '../services/portfolio.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from "../model/project"
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpEvent } from '@angular/common/http';
import { Slide } from '../model/slide';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.css'],
  encapsulation:ViewEncapsulation.None,
})

export class ProjectEditDialogComponent implements OnInit {
  // project to edit placeholder
  project: Project;
  projectEditId: number;
  projectName: string;
  deleteStatus:HttpEvent<Boolean>;

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
    console.log(this.project.tiles[1])
    this.projectEditId = this.project.id;
    this.projectName = this.project.title;
    // Setup the control fields for the Form
    this.projectEditForm.addControl("newSlideDesc", new FormControl("Slide Desc",Validators.required));
    this.projectEditForm.addControl("newSlideImageUrl", new FormControl("Slide Image URL",Validators.required));
    this.projectEditForm.addControl("title", new FormControl(this.project.title,Validators.required));
    this.projectEditForm.addControl("description", new FormControl(this.project.description,Validators.required));
    this.projectEditForm.addControl("technologies", new FormControl({value:this.project.technologies,disabled:false},Validators.required));
    this.projectEditForm.addControl("github", new FormControl(this.project.github,Validators.required));
    this.projectEditForm.addControl("image", new FormControl(this.project.image,Validators.required));
    this.projectEditForm.addControl("demo", new FormControl(this.project.demo,Validators.required));
    this.projectEditForm.addControl("tiles", new FormControl(this.project.tiles,Validators.required));
    // this.projectEditForm.addControl("slides", new FormControl(this.project.slides,Validators.required));
    this.projectEditForm.addControl("content", new FormControl(this.project.tiles[1].content, Validators.required));
    for(let i = 0; i < this.project.slides.length; i++)
    {
      this.projectEditForm.addControl("slidesDescription"+i, new FormControl(this.project.slides[i].description, Validators.required));
      this.projectEditForm.addControl("slidesImage"+i, new FormControl(this.project.slides[i].image, Validators.required));
    }
  }

  deleteSlide(image_url)
  {
    if(!environment.production)
    {
      console.log( image_url)
      this.portfolioService.deleteImage(image_url, this.project.id).subscribe(data => ()=>{ });
    } 
  }
  createSlide()
  {
    if(!environment.production)
    {
      var slide = new Slide(this.projectEditForm.controls['newSlideDesc'].value, this.projectEditForm.controls['newSlideImageUrl'].value);
      this.portfolioService.createSlide(slide, this.project.id).subscribe(data => this.project = data, ()=>{});
    }
  }
  saveSlide()
  {
    
  }
  onSubmit()
  {
    if(!environment.production)
    {
          if(this.project.slides.length != 0)
        {
          for(let i = 0; i < this.project.slides.length; i++)
          {
            this.project.slides[i].description = this.projectEditForm.controls['slidesDescription'+i].value;
            this.project.slides[i].image = this.projectEditForm.controls['slidesImage'+i].value;
            
          }
        }
        //submit project changed to backend
        this.project.image = this.projectEditForm.controls['image'].value;
        this.project.title = this.projectEditForm.controls['title'].value;
        this.project.tiles[1].content = this.projectEditForm.controls['content'].value;
        console.log(this.project.tiles[1].content)
        this.project.description = this.projectEditForm.controls['description'].value;
        if(!this.projectEditForm.controls['technologies'].untouched)
        this.project.technologies = this.projectEditForm.controls['technologies'].value.split(",");
        console.log("Submitted edited project", this.project);
        this.portfolioService.saveProject(this.project).subscribe(data => this.project = data, 
          ()=>{});
      }
    }
  }
    