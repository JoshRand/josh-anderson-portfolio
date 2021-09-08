import { getLocaleEraNames } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Vec2 } from '../math/vec2';
import { Particle } from '../model/particle';
import { Project } from '../model/project';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
 // Test array for particles
  private particles: Array<Particle> = [];
  // Particle end boolean
  private particle_condition: boolean = false;
  // gravity for particles
  private gravity: Vec2 = new Vec2(0,0.008);
  // demo project text array 
  text_array: Array<string> = new Array("Portfolio - Demo Projects");
  // animation speed 60hz - 240hz
  animation_speed: number = 20;
  chosen_array: string = this.text_array[0];
  // in ms
  text_delay: number = 16;
  // Initial position of Array List
  array_position: number = 0;
  // Initial count of current chosen array from array list
  count: number = 0;
  timer_one;
  timeout_two;
  canvas;
  constructor(private portfolioService: PortfolioService) { }

  projects: Project[]; 
  public nav_status: boolean;
  public errorProjects: string;
  public loading: boolean = true;
  ngOnInit(): void {
    if (this.projects != undefined)
      this.loading = false;
      console.log(this.loading + " " + this.projects)
    this.portfolioService.getProjects().subscribe(data => this.projects = data,
              (err: HttpErrorResponse) =>
              this.errorProjects = `Can't get projects. Got ${err.message}`,
              () => { this.loading = false; this.onLoadCompleted(this.projects)});;
    this.nav_status = true;

    this.canvas = document.getElementById("canvas_portfolio") as HTMLCanvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  
    this.timer_one = setTimeout(()=>this.TypeText(),100);
    document.getElementById("navbar").style.top = "0px";
    // console.log(this.projects[2]);
  }

  public onLoadCompleted(data):void
  {
    this.projects = data;

  }
// relocates the navbar to the top of the view after clicking a project
// and relocates the scroll of the gridView into original position
  public clickedProject(): void
  {
    // let doc = document.getElementById("navbar").style.top = "0";
    let gridbar = document.getElementById("gridid");
    gridbar.scrollIntoView();
    // console.log("Should reset navbar to 0")
  }

  public TypeText(): void
  {
    try {
      // retrieves element from document for introduction
      var introduction_text_holder = document.getElementById("demo-project-text");
      
      var rect = document.getElementById("particle_cursor").getBoundingClientRect();

      // start partical emmission 
      if(this.count == 0 && this.array_position == 0)
        setTimeout(()=>{this.DrawOnCanvas(rect.right - 1, rect.top + 40);},this.animation_speed);
      
    
      // if the count is not equal to text_array length then ++ count
      if(this.count <= this.chosen_array.length - 1)
      {
        // append string at count position into the html object
        introduction_text_holder.innerHTML += this.chosen_array[this.count];
    
    
        this.count++;
      }
      // if statement for printing the next string in the text_array
      else if(this.array_position != this.text_array.length && this.count == this.chosen_array.length)
      {
        this.array_position++;
        //console.log("selecting new string next position is " +this.array_position);
        this.chosen_array = this.text_array[this.array_position];
        this.count = 0;
        if(this.array_position != this.text_array.length)
          introduction_text_holder.innerHTML += "";
      }
      // trying to recursivly call the typetext method
      if(this.array_position != this.text_array.length)
      {
        this.timeout_two = setTimeout(()=>{this.TypeText();},this.text_delay);
      }
      else
      {
        this.particle_condition = true;
      }
    } catch (error) {
        
    }
  }


  public DrawOnCanvas(x:number, y:number)
  {
    // Get cursor element for location of its relative top and bottom
    var cursor_for_particles = document.getElementById("particle_cursor");
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
    // fill particle array
    if(!this.particle_condition)
    {
      for( let i = 0; i < 5; i++)
      {
        this.particles.push(new Particle(x, y, 'AAFF00'));
      }
    }
    
    
    // update each particle / show canvas
    for (let particle of this.particles)
    {
      particle.applyForce(this.gravity);
      particle.update();
      particle.show(ctx);
    }
    //console.log(""+ this.particles.length + " Particles")
    // delete finished particles
    for (let i = this.particles.length - 1; i >= 0; i--)
    {
     
      if(!this.particles[i].finished())
      {
        //console.log("finished particle in position" + i);
        this.particles.splice(i, 1);
      }
    }
    if(this.particles.length != 0)
    {
      try {
        var rect = cursor_for_particles.getBoundingClientRect();
     
        //console.log(document.body.scrollTop);
        setTimeout(()=>{this.DrawOnCanvas(rect.left - 1, rect.top +40);},this.animation_speed);
    } catch (error) {
        
    }
    }
   
  }

}
