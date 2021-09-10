import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  ngOnInit(){
    // this.onScroll();
  }
  public prevScrollPos: number = 0;
  public currentScrollPos: number = 0;

  @HostListener(':scroll') scrolling(){
    //  console.log('scrolling');
    // let gridBox = document.getElementById('gridid').getBoundingClientRect();
    // // console.log(gridBox.top);
    // this.currentScrollPos = (-1)*gridBox.top + 70 + gridBox.height + 170;
    // console.log(this.currentScrollPos);
    // if(this.currentScrollPos <= gridBox.height )
    // {
    //   let doc = document.getElementById("navbar").style.top = "0";
    // }
    // else if (this.prevScrollPos > this.currentScrollPos) 
    // {
    //   let doc = document.getElementById("navbar").style.top = "0";
    // } 
    // else if (this.prevScrollPos < this.currentScrollPos)
    // {//){
    //   let doc = document.getElementById("navbar").style.top = "-80px";
    // }
    // this.prevScrollPos = this.currentScrollPos;

    

  }
  // on scroll function to decide if navbar needs to be visible or not
  public onScroll() {
    var scrollTimer = setInterval(function () {
        try {
         
      } catch (error) {
       
      }
    },100);
    
  }

  getScrollingElement(): Element {

    return document.scrollingElement || document.documentElement;
  }
}
