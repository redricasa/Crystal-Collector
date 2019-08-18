//random number generator function for crystals - min of 1 and max of 12 add 1 to start the count from 1 instead of the inclusive number 0
$(document).ready(function(){
    //randomnumbergenerator function generates a number b/n two #'s 
    var randomNumberGenerator = function (max, min){
        return (Math.floor(Math.random() * (max - min + 1))+ min);
    };
   
    //random #generator to get a #b/n 1 &12, 
    var crystalGenerator = function (){
        return randomNumberGenerator(12,1);
    };   
    //not setting this here as we'll set it in the reset function below 
    var goalval; 
    var win= 0;
    var loss= 0;
    //takes the id of the wins span and sets the text to the win varirable
    $("#win").text(win);
    $("#loss").text(loss);
    var accumulated=0;
    //declare a function expression that will act as an event handler for clicks
    var crystalEventHandler = function (){
        //extract the value out of crystal
        var val = parseInt($(this).attr('crystalValue'), 10);
        //add the value of the crystal to accumulated: accumulated= accumulated+ val
        accumulated += val;
        // console.log("the extracted value is "+ val );
        // console.log("the accumulated amount is " + accumulated);
        //grabs the id of the accumulated div and turns it into an object and puts the accumulated amount on screen 
        $("#accumulated").text(accumulated);
        //if/else stmt to update the screen by incrementing when player losses and wins when the player goes over versus gets the exact number
        if (accumulated===goalval){
            $("#status").html("<p>You won!!</p>");
            $("#win").text(++win);
            reset(); //calls the reset function to set all values to 0
        }
        else if (accumulated > goalval){
            $("#status").html("<p>You lost!</p>");
            $("#loss").text(++loss);
            reset();
        }
        else{
            $("#status").html("<p>keep playing..</p>");
            // console.log("keep playing")
        }
    };
    //set const instead of var since const can't be set to the different amount 
    const maxGoal = 120;
    const minGoal = 19;
    //gets all the divs with class=crystal and adds an event handler function. this is a function reference
    $(".crystal").click(crystalEventHandler);
    //a function that resets the values on the page to 0 without refreshing the web browser
    var reset = function(){
        //get the goalval which holds the value of the crystal needed, and calls the random # generator and put in the parameters declared initially- that refer to maxGoal=120 and minGoal=19 since they're global variables
        goalval = randomNumberGenerator(maxGoal, minGoal);
        //grabs the id set to the span element of crystal needed and puts the value of goalval on the screen
        $("#random-goal").text(goalval);
        //sets the value of accumulated to 0 
        accumulated=0;

        var goldval = crystalGenerator();
        //set the attribute 'crystalValue' which will later be extracted in the onclick handler
        $("#gold").attr('crystalValue', goldval);
        console.log(goldval+" gold");
    
        var greenval = crystalGenerator();
        $("#green").attr('crystalValue', greenval);
        console.log(greenval+" green");
    
        var purpleval= crystalGenerator();
        $("#purple").attr('crystalValue', purpleval);
        console.log(purpleval+" purple");
    
        var blueval = crystalGenerator();
        $("#blue").attr('crystalValue', blueval);
        console.log(blueval+" blue");
    
        $("#status").html("<p>A new game!</p>"); 
        $("#accumulated").text(accumulated);
    }
    //call the reset function which the starts the original/first game
    reset();
});











