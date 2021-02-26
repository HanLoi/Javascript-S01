// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let x = Math.floor(Math.random()*100-1)+1;
    let z = prompt("Give me your number");
    let guesses = 0;

    while ( z != x){
        if (z < x  ) {
            z = prompt("too low, retry to guess. Your number ?")
            guesses += 1
    
        }else if (z > x) {
            z = prompt("too hight, retry to guss. Your Number ?")
            guesses += 1
        }
    }

    if ( z == x) {
        guesses += 1
        alert("You find the mystery number ! And you needed " + guesses + " try !")
    }



})();
