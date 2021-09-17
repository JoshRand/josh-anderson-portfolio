import { Component, OnInit, Type } from '@angular/core';
import { Particle } from '../model/particle';
import { Vec2 } from '../math/vec2';
import { ParticleEmitter } from '../utilities/particle-emitter';
import { TypeWriter } from '../utilities/type-writer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // Particle end boolean
  particleStarted: boolean = false;

  // Test particle
  // particle: Particle = new Particle(50, 50, 'AAFF00');
  // Test Canvas to display particles
  canvas;
  // gravity for particles
  gravity: Vec2 = new Vec2(0,0.009);
  
  // Text to type
  textArray: Array<string> = new Array(
    "Hi there, my name is Joshua Anderson. ",
    "I'm a Computer Engineer who loves developing with new Technologies. ",
    "I'm also a Full-Stack Java Web developer. ",
    "Check out my projects below!");
  
  particleEmitter: ParticleEmitter;

  span: HTMLSpanElement;
  typeWriter: TypeWriter;
  rect;
  private timeOut;
  private timeOut2;
  private timeOutArray = [];
  private timeOutArrayParticles = [];
  constructor() {
    
  }
 
  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.span = document.getElementById('introduction-text');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    let doc = document.getElementById("navbar").style.top = "0";
    // create and Initialize Particle emitter
    this.particleEmitter = new ParticleEmitter(this.canvas);
    this.particleEmitter.Initialize(50, 1, 300, -10, 'green', 'circle', new Vec2(0,0.009));
    this.particleEmitter.SetParticleSize(5);
    // 0 <  < 100;  5 is default
    this.particleEmitter.SetParticleLifeTimeSpeed(5);
    // create typewriter initialize and start
    this.typeWriter = new TypeWriter(this.textArray, this.span);    
    // this.timeout = setTimeout(()=>{this.TypeText();},100);
    this.typeWriter.Start();
    this.TypeText();
    this.particleEmitter.Start();
    this.DrawParticles();
  }
  // TODO:: Change to setInterval instead of setTimeout
  ngOnDestroy()
  {
    // this.timeOutArray.forEach(timeout => {
      
    //   clearTimeout(timeout);
    //   console.log(timeout)
    //   timeout = null;
    //   // console.log(this.timeOutArray.length)
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

  TypeText()
  {
    this.timeOut = setTimeout(()=>{

      if(!this.typeWriter.GetStatus())
      {
        // clearTimeout(this.timeOut);
        this.showButton();
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
      this.rect = document.getElementById("cursor").getBoundingClientRect();
      this.particleEmitter.SetPosition(this.rect.left - 1, this.rect.top + 10);
      this.particleEmitter.DrawOnCanvas();
      this.DrawParticles();
    },16);
    this.timeOutArrayParticles.push(this.timeOut2);
  }
  
  public Reset(): void
  {
    
    var introduction_text_holder = document.getElementById("introduction-text");
    introduction_text_holder.innerHTML = "";
    // console.log("Reset was pressed");
    // reset chosen array
    // this.chosen_array = this.text_array[0];
    // reset array position
    // this.array_position = 0;
    // Initial count of current chosen array from array list
    // this.count = 0;
  }

  public showButton(): void{
    console.log("show button")
    let element = document.getElementById("portfolio-button");
    var op = 0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op.toString();
        op += 0.005;
    }, 11);
  }
}
