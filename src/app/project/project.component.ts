import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../model/project';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectPictureDialogComponent } from '../project-picture-dialog/project-picture-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  public project: Project;
  public project_id: number;
  public slide_index: number = 0;
  public slides:string[];
  public demoUrl:SafeResourceUrl;
  public demo:string;
  public githubUrl:SafeResourceUrl;
  public github:string;
  constructor(private portfolioService: PortfolioService, route: ActivatedRoute, private sanitizer:DomSanitizer,private dialog:MatDialog) {
    this.project_id = parseInt(route.snapshot.paramMap.get('id'));
   }
  ngOnInit(): void {
    this.project = this.portfolioService.getProject(this.project_id);
    this.slides = this.project.slides;
    // console.log(this.project);
    // console.log(this.slides);
    this.updateDemoUrl(this.project.demo);
    this.updateGithubUrl(this.project.github);
    // console.log(this.getDemo());
    // window.scrollTo(0,0); 
  }
  public incrementSlides():void{
    this.slide_index++;
    if(this.slide_index > this.slides.length - 1)
      this.slide_index = 0;
  }
  public decrementSlides():void{
    this.slide_index--;
    if(this.slide_index < 0)
      this.slide_index = this.slides.length - 1;
  }
  updateGithubUrl(id:string)
  {
    this.github = 'https://github.com/JoshRand/' + id;
    this.githubUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.github);
  }
  updateDemoUrl(id:string){
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.demo = 'https://www.youtube.com/embed/' + id;
    this.demoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.demo);
    // return this.project.demo;
  }
  openGithub():void
  {

    window.open('https://github.com/JoshRand/' + this.project.github, '_blank');
  }
  openDialog():void
  {
    let dialogRef = this.dialog.open(ProjectPictureDialogComponent, {
      // height: window.outerHeight - 200 + "px",
      // width:  window.outerWidth - 100 +'px',
      panelClass: 'maindialog',
      data: {
        slide:this.project.slides,
        slideIndex:this.slide_index
      },
    });
    console.log(window.innerWidth + "inner width");
    console.log(window.outerWidth + "outer width");
    console.log(window.innerHeight + "inner height");
    console.log(window.outerHeight + "outer height");
    
  }
}
