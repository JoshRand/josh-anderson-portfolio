import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }
  @Input() technologies:string[] = [];
  @Input() tech:string;
  ngOnInit(): void {
    console.log(this.tech)
  }

}
