
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

        var i = new Number(0)
        for (i = 0; i <=100 ; i++) {
            if (i%3 ==0) {
                alert ("fizz")
            }
            else if (i%5 == 0){
                alert ("buzz")
            } 
            else if (i%3==0) && (i%5==0){
                alert ("fizzbuzz")
            }
        }
        console.log(i)
    // your code here

})();
