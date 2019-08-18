//random number generator function for crystals - min of 1 and max of 12 add 1 to start the count from 1 instead of the inclusive number 0
$(document).ready(function(){
    var crystalGenerator = function (){
        return (Math.floor(Math.random()* 13) + 1);
    };    
    //Crystal amount needed random number generator function 
    var goalGenerator = function (max, min){
        return (Math.floor(Math.random() * (max - min + 1))+ min);
    };
    const max = 120;
    const min = 19;
    var goalval = 0;
    var win= 0;
    var loss= 0;
    var accumulated=0;
    // var blue = function blue (){};
    var crystalEventHandler = function (eventObject){
        //extract the value out of crystal
        var val = parseInt($(this).attr('samri'), 10);
        //add that value to accumulated
        accumulated= accumulated+val;
        console.log("the extracted value is "+ val );
        console.log("the accumulated amount is " + accumulated);
        $("#accumulated").text(accumulated);
        
        if (accumulated===goalval){
            $("#status").html("<p>You won!!</p>");
            $("#win").text(++win);
            reset();
        }
        else if (accumulated > goalval){
            $("#status").html("<p>You lost!</p>");
            $("#loss").text(++loss);
            reset();
        }
        else{
            $("#status").html("<p>keep playing..</p>");
            console.log("keep playing")
        }
    };

    $(".crystal").click(crystalEventHandler);

    var reset = function(){
        goalval = goalGenerator(max, min);
        $("#random-goal").text(goalval);
        accumulated=0;
        var goldval = crystalGenerator();
        $("#gold").attr('samri', goldval);//to link the crystalGnerator # to #gold
        console.log(goldval+" gold");
    
        var greenval = crystalGenerator();
        $("#green").attr('samri', greenval);
        console.log(greenval+" green");
    
        var purpleval= crystalGenerator();
        $("#purple").attr('samri', purpleval);
        console.log(purpleval+" purple");
    
        var blueval = crystalGenerator();
        $("#blue").attr('samri', blueval);
        console.log(blueval+" blue");
    
        $("#status").html("<p>A new game!</p>"); 
        $("#accumulated").text(accumulated);
    }
    reset();
});











