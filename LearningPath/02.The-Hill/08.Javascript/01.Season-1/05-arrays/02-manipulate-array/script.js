// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var first = fruits.shift();
        var last = fruits.pop();
        var newLength = fruits.unshift('banana')
        var newLength = fruits.push('Kiwi')

        alert (fruits) })

})();
