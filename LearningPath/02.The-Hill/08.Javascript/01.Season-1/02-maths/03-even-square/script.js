
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var a = new Number(1)
        
        while (a != 21) {
          alert (Math.pow (a, 2));
          a ++;
        }

      alert (a)
    });

})();
