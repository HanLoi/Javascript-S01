
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").valu

    document.getElementById("run").addEventListener("click", () => {

        // your code here
       
        var n = new Number (document.getElementById("number").value)
        
        function factorial(n){
            //base case
            if(n == 0 || n == 1){
                return 1;
            //recursive case
            }else{
                return n * factorial(n-1);
            }
        }
        
        alert (factorial(n))

    });
})();
