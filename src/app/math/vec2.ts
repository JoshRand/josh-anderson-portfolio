export class Vec2 {
    // intitalize x/y to 0
    x_component: number = 0;
    y_component: number = 0;

    constructor(x, y)
    {   
        // initialize to constructor arguments
        this.x_component = x;
        this.y_component = y;
    }

    setRandomMinMax2D(min, max)
    {
        this.x_component = (Math.random() * max * 2 + min) - 1;
        this.y_component = (Math.random() * max * 2 + min) - 1;
    }

    public random2D()
    {
        return new Vec2(Math.random(),Math.random());
    }
    
    set(x, y)
    {
        // set the vector components
        this.x_component = x;
        this.y_component = y;
    }

    copy(rhs)
    {
        // set the vector components
        this.x_component = rhs.x_component;
        this.y_component = rhs.y_component;
    }

    add(rhs)
    {
        // add corresponding component
        this.x_component += rhs.x_component;
        this.y_component += rhs.y_component;
    }
    
    sub(rhs)
    {
        // subtract corresponding component
        this.x_component -= rhs.x_component;
        this.y_component -= rhs.y_component;
    }

    mult(scalar)
    {
        // mult corresponding components
        this.x_component *= scalar.x_component;
        this.y_component *= scalar.y_component;
    }

    dot(rhs)
    {
        // returns scalar product - dot product - inner product
        return (this.x_component*rhs.x_component + this.y_component*rhs.y_component);
    }
}
