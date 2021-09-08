import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  languages = [
    {name:"Java", proficiency:90},
    {name:"JavaScript", proficiency:70}, 
    {name:"TypeScript", proficiency:70}, 
    {name:"HTML5", proficiency:60}, 
    {name:"CSS", proficiency:60},
    {name:"C#", proficiency:90},
    {name:"C++", proficiency:70}
  
  ];

  frameworks = [
    {name:"Springboot", proficiency:70},
    {name:"REST API", proficiency:90}, 
    {name:"Angular", proficiency:80}, 
    {name:"Express.JS", proficiency:40},
    {name:".NET", proficiency:20},
  
  ];

  devTools = [
    {name:"Eclipse", proficiency:80},
    {name:"Visual Studio Code", proficiency:90}, 
    {name:"Docker", proficiency:70}, 
    {name:"Postman", proficiency:80},
    {name:"Git", proficiency:80},
    {name:"Visual Studio", proficiency:90},
    {name:"Vim", proficiency:60},
    {name:"PuTTY", proficiency:40},

  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
