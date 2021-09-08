import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //route array list for nav links
  public nav_links = [
    {'LinkName':"Home", 'Link':""},
    {'LinkName':"Portfolio", 'Link':"portfolio"},
    {'LinkName':"About", 'Link':"about"},
    {'LinkName':"Résumé", 'Link':"resume"}

  ]
  constructor(public location: Location) { }

  ngOnInit(): void {
  }
  onClick(): void{
    document.getElementById('navbar').style.top = '0px';
  }
  back(): void {
    this.location.back()
  }
}
