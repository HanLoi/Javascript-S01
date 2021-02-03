// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    function rand() {
        return Math.floor (Math.random() * (100 - 1 + 1) + 1)};
    
        var n = new Number(10)
    
    function multiRand(n) {
        let arr = [];
        while (n !=0) {
        arr.push(rand())
        n --;
        }; return arr};

        function average(arr) {
            let sum = new Number(0);
            arr.forEach(element => {
                sum += element
            });
            return Math.floor(sum/arr.length);
        }

        function sum (arr) {
            let sum = new Number(0);
            arr.forEach(element => {
                sum += element
            });
            return sum;
        }

    document.getElementById("run").addEventListener("click", () => {
       
        /* function rand() {
            return Math.floor (Math.random() * (10 - 1 + 1) + 1)};*/

                var arr = multiRand(n)
            
                document.getElementById("n-1").innerHTML = arr[0]
                document.getElementById("n-2").innerHTML = arr[1]
                document.getElementById("n-3").innerHTML = arr[2]
                document.getElementById("n-4").innerHTML = arr[3]
                document.getElementById("n-5").innerHTML = arr[4]
                document.getElementById("n-6").innerHTML = arr[5]
                document.getElementById("n-7").innerHTML = arr[6]
                document.getElementById("n-8").innerHTML = arr[7]
                document.getElementById("n-9").innerHTML = arr[8]
                document.getElementById("n-10").innerHTML = arr[9]

                let a = Math.min (...arr)
                let b = Math.max (...arr)
                let c = average(arr)
                let d = sum(arr)
                 

                document.getElementById("min").innerHTML = a
                document.getElementById("max").innerHTML = b
                document.getElementById("average").innerHTML = c
                document.getElementById("sum").innerHTML = d


            
                console.log(arr)


    })

        /* Méthode Laurent (meilleur que la mienne)
        
        document.getElementById("run").addEventListener("click", ()=>{
        let tab = [];
        let tem = 0;

        for (let index = 0; index < 10; index++) {

            tab.push(Math.floor(Math.random()* 100));
            document.getElementById('n-'+(index+1)).innerHTML = tab[index];

        }

        tab.forEach(element => {
            tem += element;
        }); 

        document.getElementById("min").innerHTML =  Math.min.apply(null, tab);
        document.getElementById("max").innerHTML =  Math.max.apply(null, tab);
        document.getElementById("sum").innerHTML = tem;
        document.getElementById("average").innerHTML =  tem/tab.length
    }) */
})();
