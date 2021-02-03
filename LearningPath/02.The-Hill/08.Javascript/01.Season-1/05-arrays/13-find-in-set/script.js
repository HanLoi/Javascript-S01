// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        var count = new Number(0)
        
        people.forEach(element => {
            count++;    })

            console.log(count)

            console.log(people.has("Alexandre"))
    })
})();
