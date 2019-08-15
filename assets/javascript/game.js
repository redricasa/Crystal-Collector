//random number generator function for crystals - min of 1 and max of 12 add 1 to start the count from 1 instead of the inclusive number 0
var crystalGenerator = function (){
    return console.log(Math.floor(Math.random()* 13) + 1);
}    
console.log (crystalGenerator());
//Crystal amount needed random number generator function 
var goalGenerator = function (max, min){
    var max = 120;
    var min = 19;
    return (Math.floor(Math.random() * (max - min + 1))+ min);
};
console.log (goalGenerator() + " goal");







