import { Vec2 } from "../math/vec2";
import { Particle } from "../model/particle";

export class ParticleEmitter {
    
    private particles: Array<Particle> = [];
    private gravity: Vec2 = new Vec2(2.0,2.0);
    private speed: number = 2.0; 
    private canvas : HTMLCanvasElement;
    private maxParticles = 5;
    private particleColor:string;
    // default particle shape
    private shape = 'circle';
    private posX: number = 0;
    private posY: number = 0;
    private emit: boolean = false;
    private particleSize: number = 4;
    private stopParticleGeneration = false;
    private particleDeathSpeed: number = 5; 
    timeoutArray = [];
    private status: boolean = false;

    constructor(canvas: HTMLCanvasElement)
    {
        this.canvas = canvas;
    }

    public Initialize(maxParticles: number, speed: number,  posX:number , posY:number,  particleColor: string, shape: string, gravity: Vec2){
        this.maxParticles = maxParticles;
        this.gravity = gravity;
        this.speed = 1/speed;
        this.SetParticleColor(particleColor);
        this.posX = posX;
        this.posY = posY;
        this.shape = shape;

    }
    public SetParticleLifeTimeSpeed(deathSpeed: number)
    {
        if( deathSpeed > 0 && deathSpeed < 100)
            this.particleDeathSpeed = deathSpeed;
        else
            this.particleDeathSpeed = 1;
    } 
    public SetParticleSize(size: number)
    {
        if(size > 0 && size < 100)
            this.particleSize = size;
        else
            this.particleSize = 1;
    }
    public SetPosition(x, y)
    {
        this.posX = x;
        this.posY = y;
    }
    public SetSpeed(speed: number)
    {
        this.speed = speed;
    }

    public SetGravity(gravity: Vec2)
    {
        this.gravity = gravity;
    }

    public SetMaxParticles(maxParticles: number)
    {
        this.maxParticles = maxParticles;
    }

    public GetParticleCount()
    {
        return this.particles.length;
    }
    public SetParticleColor(color: string)
    {
        switch(color)
        {
            case "red":
                this.particleColor = 'FF0000';
                break;
            case "orange":
                this.particleColor = 'FFA500';
                break;
            case "yellow":
                this.particleColor = 'FFFF00';
                break;
            case "green":
                this.particleColor = 'AAFF00';
                break;
            case "blue":
                this.particleColor = '0000FF';
                break;
            case "lightblue":
                this.particleColor = '99ccff';
                break;
            case "indigo":
                this.particleColor = '4B0082';
                break;
            case "violet":
                this.particleColor = '8F00FF';
                break;

        }
    }
    
    public SetShape(shape: string)
    {
        this.shape = shape;
    }

    public Start()
    {
        // setTimeout(()=>{this.DrawOnCanvas(),this.speed});
        this.emit = true;
    }

    public Stop()
    {
        this.stopParticleGeneration = true;
       
    }
    public GetStatus()
    {
        return this.status;
    }
    public DrawOnCanvas()
    {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
        // if(!this.particle_condition)
        // {
            
        // fill particle array
        if(!this.stopParticleGeneration) 
            for( let i = 0; i < 5; i++)
            {
                this.particles.push(new Particle(this.posX,this.posY, this.particleColor, this.shape, this.particleSize, this.particleDeathSpeed));
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
                // console.log("finished particle in position" + i);

                this.particles.splice(i, 1);
            }
        }
        
        if(this.particles.length == 0)
        {
            this.emit = false;    
            this.status = true;
        }

        // if(this.emit == true)
            // setTimeout(()=> this.DrawOnCanvas(), this.speed);
    
    }

    public Destroy()
    {
       this.particles.length = 0;
    }
}

