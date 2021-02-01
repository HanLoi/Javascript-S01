// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value
    var Array = document.getElementById("numbers").value.split(",");

    document.getElementById("run").addEventListener("click", () => {
            
        alert (Array.sort((function(a, b) {return a - b})));
        
        // your code here

    });

})();
