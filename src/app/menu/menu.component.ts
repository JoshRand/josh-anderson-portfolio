import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public dollars : number = 50.25;
  constructor() { }

  ngOnInit(): void {
    let gridbar = document.getElementById("gridid");
    gridbar.scrollIntoView();
    document.getElementById("navbar").style.top = "0px";
  }
 
}
