// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    var fLen = fruits.length;
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        

            fLen = fruits.length;

            let i = new Number(0)

            let text = " ";
            for (i = 0; i < fLen; i++) {
              text += " " + fruits[i] + " ";
            }
            text += " ";

            console.log(text)})
})();
