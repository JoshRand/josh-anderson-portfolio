import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../model/project';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

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
  constructor(private portfolioService: PortfolioService, route: ActivatedRoute, private sanitizer:DomSanitizer) {
    this.project_id = parseInt(route.snapshot.paramMap.get('id'));
   }
  ngOnInit(): void {
    this.project = this.portfolioService.getProject(this.project_id);
    this.slides = this.project.slides;
    console.log(this.project);
    console.log(this.slides);
    this.updateDemoUrl(this.project.demo);
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
  updateDemoUrl(id:string){
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.demo = 'https://www.youtube.com/embed/' + id;
    this.demoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.demo);
    // return this.project.demo;
  }
}
