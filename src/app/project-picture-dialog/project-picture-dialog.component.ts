import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from "../model/project";

@Component({
  selector: 'app-project-picture-dialog',
  templateUrl: './project-picture-dialog.component.html',
  styleUrls: ['./project-picture-dialog.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ProjectPictureDialogComponent implements OnInit {
  slide_index: number = 0;
  public slides;
  constructor(public dialogRef: MatDialogRef<ProjectPictureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.slides = this.data;
    this.slide_index = this.slides.slideIndex;
    console.log(this.slides.slide[0].image)
    
  }
  
  public incrementSlides():void{
    this.slide_index++;
    if(this.slide_index > this.slides.slide.length - 1)
      this.slide_index = 0;
    // let object = document.getElementById('carousel-item-center-dialog');
    // object.style.marginTop = (300 - 0.25*object.getBoundingClientRect().height).toString() +'px';
    // console.log((200 - object.getBoundingClientRect().height).toString())
  }
  
  public decrementSlides():void{
    this.slide_index--;
    if(this.slide_index < 0)
      this.slide_index = this.slides.slide.length - 1;
  }

}
