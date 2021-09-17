export class TypeWriter {
    // Element in HTML to add text to
    private span: HTMLSpanElement;
    // Default values
    private textArray: Array<string>;
    chosenArray: string;
    // in ms
    textDelay: number = 16;
    // animation speed 60hz - 240hz
    animationSpeed: number = 20;
    // Initial position of Array List
    arrayPosition: number = 0;
    // Initial count of current chosen array from array list
    count: number = 0;
    // timeout object place holders
    timeoutOne;
    timeoutTwo;

    private finished: boolean = false;

    constructor(textArray: Array<string>, span: HTMLSpanElement)
    {
        this.textArray = textArray;
        this.span = span;
        this.chosenArray = this.textArray[0];
    }

    public GetStatus() : boolean
    {
        return this.finished;
    }

    Start()
    {
        try {
            // retrieves element from document for introduction
            var introduction_text_holder = this.span;
            
            if(this.count == 0 && this.arrayPosition == 0)
            {
                this.finished = true;
            }

            // if the count is not equal to textArray length then ++ count
            if(this.count <= this.chosenArray.length - 1)
            {
                // append string at count position into the html object
                introduction_text_holder.innerHTML += this.chosenArray[this.count];
                // Debugging
                //console.log("TypeText entered If statement; Array Length= " + this.textArray.length + " chosen array = "+this.arrayPosition+" and count= " + this.count)
                this.count++;
            }
            // if statement for printing the next string in the textArray
            else if(this.arrayPosition != this.textArray.length && this.count == this.chosenArray.length)
            {
                this.arrayPosition++;
                //console.log("selecting new string next position is " +this.arrayPosition);
                this.chosenArray = this.textArray[this.arrayPosition];
                this.count = 0;
                if(this.arrayPosition != this.textArray.length)
                    introduction_text_holder.innerHTML += "";
                // condition is met, exit from the recurrsion 
                // console.log(this.arrayPosition + " " + this.textArray.length);
                
                // console.log("clearing timeout")
                // clearTimeout(this.timeout_one);
                // clearTimeout(this.timeout_two);
            }

            // trying to recursivly call the typetext method
            if(this.arrayPosition != this.textArray.length)
            {
                this.timeoutTwo = setTimeout(()=>{this.Start()},this.textDelay);
            }
            else
            {
                console.log("FINISHED IN TYPE_WRITER")
                this.finished = false;
            }
        } catch (error) {
        
        }

    }

    Stop()
    {

    }
}
