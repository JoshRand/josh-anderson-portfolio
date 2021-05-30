import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from '../model/project';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }

  test_array: Array<Project>; 
  public nav_status: boolean;
  ngOnInit(): void {
    this.nav_status = true;
    this.test_array = this.portfolioService.getProjects();
    
    document.getElementById("navbar").style.top = "0px";
    // console.log(this.test_array[2]);
  }

// relocates the navbar to the top of the view after clicking a project
// and relocates the scroll of the gridView into original position
  public clickedProject(): void
  {
    // let doc = document.getElementById("navbar").style.top = "0";
    let gridbar = document.getElementById("gridid");
    gridbar.scrollIntoView();
    console.log("Should reset navbar to 0")
  }
}
