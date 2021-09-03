import { Component, OnInit } from '@angular/core';
import { Particle } from '../model/particle';
import { Vec2 } from '../math/vec2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // Test array for particles
  particles: Array<Particle> = [];
  // Particle end boolean
  particle_condition: boolean = false;
  // Test particle
  // particle: Particle = new Particle(50, 50, 'AAFF00');
  // Test Canvas to display particles
  canvas;
  // gravity for particles
  gravity: Vec2 = new Vec2(0,0.009);
  // Test array for grid
  test_array: Array<number> = new Array(12);
  // Text to type
  text_array: Array<string> = new Array(
    "Hi there, my name is Joshua Anderson. ",
    "I'm a Computer Engineer who loves developing with new Technologies. ",
    "I'm also a Full-Stack Java Web developer. ",
    "Check out my projects below!");
  // Chosen Array from Initial Position
  chosen_array: string = this.text_array[0];
  // in ms
  text_delay: number = 16;
  // animation speed 60hz - 240hz
  animation_speed: number = 20;
  // Initial position of Array List
  array_position: number = 0;
  // Initial count of current chosen array from array list
  count: number = 0;
  // timeout object place holders
  timeout_one;
  timeout_two;

  constructor() {
    
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    let doc = document.getElementById("navbar").style.top = "0";
    this.timeout_one = setTimeout(()=>{this.TypeText();},100);
  }
  // TODO:: Change to setInterval instead of setTimeout
  public TypeText(): void
  {
    try {
    // retrieves element from document for introduction
    var introduction_text_holder = document.getElementById("introduction-text");
    // retrieves element of cursor to act as partical fountain guide
    var cursor_for_particles = document.getElementById("cursor");
    // Sends all to the document element "introduction-text"
    // this.text_array.forEach(element => {
    //   introduction_text_holder.innerHTML += element;
    // });
    
    var rect = cursor_for_particles.getBoundingClientRect();
    // start partical emmission 
    if(this.count == 0 && this.array_position == 0)
      setTimeout(()=>{this.DrawOnCanvas(rect.left - 1, rect.top +10);},this.animation_speed);
    
   
    // if the count is not equal to text_array length then ++ count
    if(this.count <= this.chosen_array.length - 1)
    {
      // append string at count position into the html object
      introduction_text_holder.innerHTML += this.chosen_array[this.count];
      // Debugging
      //console.log("TypeText entered If statement; Array Length= " + this.text_array.length + " chosen array = "+this.array_position+" and count= " + this.count)
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
      // condition is met, exit from the recurrsion 
      // console.log(this.array_position + " " + this.text_array.length);
      
      // console.log("clearing timeout")
      // clearTimeout(this.timeout_one);
      // clearTimeout(this.timeout_two);
    }

    // trying to recursivly call the typetext method
    if(this.array_position != this.text_array.length)
    {
      this.timeout_two = setTimeout(()=>{this.TypeText();},this.text_delay);
    }
    else
    {
      this.particle_condition = true;
      this.showButton();
    }
    //setTimeout(()=>{console.log("2000")},2000);
  } catch (error) {
      
  }
  }

  public Reset(): void
  {
    
    var introduction_text_holder = document.getElementById("introduction-text");
    introduction_text_holder.innerHTML = "";
    //console.log("Reset was pressed");
    // reset chosen array
    this.chosen_array = this.text_array[0];
    // reset array position
    this.array_position = 0;
    // Initial count of current chosen array from array list
    this.count = 0;
  }

  public DrawOnCanvas(x:number, y:number)
  {
    // Get cursor element for location of its relative top and bottom
    var cursor_for_particles = document.getElementById("cursor");
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
      setTimeout(()=>{this.DrawOnCanvas(rect.left - 1, rect.top +10);},this.animation_speed);
    } catch (error) {
        
    }
    }
   
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
