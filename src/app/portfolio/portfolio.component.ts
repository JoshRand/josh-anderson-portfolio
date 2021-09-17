import { getLocaleEraNames } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Vec2 } from '../math/vec2';
import { Particle } from '../model/particle';
import { Project } from '../model/project';
import { PortfolioService } from '../services/portfolio.service';
import { ParticleEmitter } from '../utilities/particle-emitter';
import { TypeWriter } from '../utilities/type-writer';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // gravity for particles
  private gravity: Vec2 = new Vec2(0,0.008);
  // demo project text array 
  textArray: Array<string> = new Array("Portfolio - Demo Projects");
  
  span: HTMLSpanElement;
  timeOut;
  timeOut2
  timeOutArray = [];
  timeOutArrayParticles = [];
  canvas;  
  rect;
  particleEmitter: ParticleEmitter;
  typeWriter: TypeWriter;
   // Particle end boolean
  particleStarted: boolean = false

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
    
  }
  ngOnDestroy()
  {
    // this.timeOutArray.forEach(timeout => {
      
    //   clearTimeout(timeout);
    //   console.log(timeout)
    //   timeout = null;
    // });
    this.canvas = null;
    this.timeOutArray = null;
    this.timeOutArrayParticles = null;
    this.particleEmitter.Destroy();
    this.typeWriter = null;
    this.particleEmitter = null;
    // var id = window.setTimeout(function() {}, 0);

    // while (id--) {
    //  window.clearTimeout(id); // will do nothing if no timeout with id is present
    // }
  }
  public onLoadCompleted(data):void
  {
    this.projects = data;
    this.nav_status = true;

    this.canvas = document.getElementById("canvas_portfolio") as HTMLCanvasElement;
    this.span = document.getElementById("demo-project-text");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  
    document.getElementById("navbar").style.top = "0px";
    this.particleEmitter = new ParticleEmitter(this.canvas);
    this.particleEmitter.Initialize(10, 0.05, 200, 200, 'green', 'circle', new Vec2(0,0.009));
    this.particleEmitter.SetParticleSize(4);
    // 0 <  < 100;  5 is default
    this.particleEmitter.SetParticleLifeTimeSpeed(5);
    
    // create typewriter initialize and start
    this.typeWriter = new TypeWriter(this.textArray, this.span);   
    this.typeWriter.Start();
    this.TypeText();
    this.particleEmitter.Start();
    this.DrawParticles();


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

  TypeText()
  {
    this.timeOut = setTimeout(()=>{

      if(!this.typeWriter.GetStatus())
      {
        // clearTimeout(this.timeOut);
        // this.showButton();
        this.timeOutArray.forEach(timeout => {
          console.log("here")
          clearTimeout(timeout);
        });
        return;
      }
    },16);
    this.timeOutArray.push(this.timeOut);
  }
  
  DrawParticles()
  {
    this.timeOut2 = setTimeout(()=>{

      if(!this.typeWriter.GetStatus())
      {
        // Stopping particle emitter & returning/clearing timeouts once particles are gone
        this.particleEmitter.Stop();
        if(this.particleEmitter.GetStatus())
        {
          this.timeOutArrayParticles.forEach(timeout => {
            clearTimeout(timeout);
          });
          return;
        }
      }
      this.rect = document.getElementById("particle_cursor").getBoundingClientRect();
      this.particleEmitter.SetPosition(this.rect.left - 1, this.rect.top + 30);
      this.particleEmitter.DrawOnCanvas();
      this.DrawParticles();
    },16);
    this.timeOutArrayParticles.push(this.timeOut2);
  }
}
