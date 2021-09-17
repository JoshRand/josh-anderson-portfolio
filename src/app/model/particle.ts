import {Vec2} from "../math/vec2";
export class Particle {
    // position of particle
    pos: Vec2 = new Vec2(0,0);
    // velocity of particle
    vel: Vec2 = new Vec2(0,0);
    // acceleration vector of particle
    acc: Vec2 = new Vec2(0,0);
    // lifetime of particle
    lifetime: number = 255;
    // radius of particle (circle)
    radius: number = 4;
    // color in 0x000000 format
    color: string = '000000';
    // shape
    shape: string = 'circle';
    // death speed defaulted to 5
    deathSpeed: number = 5;

    constructor(x:number, y:number, c:string, shape:string, size:number, deathSpeed: number)
    {
        this.pos.set(x,y);
        this.vel.setRandomMinMax2D(-1,2);
        this.color = c;
        this.shape = shape;
        this.radius = size;
        this.deathSpeed = deathSpeed;
    }

    finished(): boolean
    {
        return (this.lifetime > 0);
    }

    applyForce(force:Vec2)
    {
        this.acc.add(force);
    }

    update()
    {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
        // cool firecracker effect if we go below 0
        this.lifetime -= this.deathSpeed;
        // normal effect
        // if(this.lifetime > 0)
        // {
        //     this.lifetime -= 5;
        // }
    }

    show(ctx:CanvasRenderingContext2D)
    {
        let alpha_factor = (this.lifetime) / 255;
        this.radius -= (1 - alpha_factor ) * (this.radius -0.8);
        ctx.fillStyle = '#'+this.color;
        ctx.globalAlpha = alpha_factor;
        ctx.shadowColor = 'rgba(0,0,0,.5)';//'#'+'000000';
        ctx.shadowOffsetX= -1;
        ctx.shadowOffsetY=1;
        ctx.beginPath();
        if(this.shape == 'circle')
            ctx.ellipse(this.pos.x_component, this.pos.y_component ,this.radius ,this.radius, 0, 0, 2 * Math.PI);
        if(this.shape == 'square')
            ctx.fillRect(this.pos.x_component, this.pos.y_component, this.radius, this.radius);
        ctx.fill();
    }

    // ways to fill with color
    // ctx.fillStyle = 'orange';
    // ctx.fillStyle = '#FFA500';
    // ctx.fillStyle = 'rgb(255, 165, 0)';
    // ctx.fillStyle = 'rgba(255, 165, 0, 1)';
}
