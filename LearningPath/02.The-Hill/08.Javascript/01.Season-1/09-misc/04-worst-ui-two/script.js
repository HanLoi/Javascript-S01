// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    let valueOne = 460;
    let valueTwo = 0;
    let valueThree = 0;
    let valueFour =0;
    
    function target () {
    return document.getElementById("target").innerHTML="+" + valueOne.toString() + valueTwo.toString().padStart(2, "0")  + valueThree.toString().padStart(2, "0") + valueFour.toString().padStart(2, "0")
    }

document.getElementById("part-one").addEventListener("click",() =>{
    valueOne += 1
    document.getElementById("part-one").innerHTML = valueOne
    target()
    if (valueOne >= 499){
        valueOne -= 1
    }
})

document.getElementById("part-two").addEventListener("click",() =>{
    valueTwo += 1
    document.getElementById("part-two").innerHTML = valueTwo
    target()
    if (valueTwo >= 99){
        valueTwo -= 1
    }})

document.getElementById("part-three").addEventListener("click",() =>{
    valueThree += 1
    document.getElementById("part-three").innerHTML = valueThree
    target()
    if (valueThree >= 99){
        valueThree -= 1
    }})

document.getElementById("part-four").addEventListener("click",() =>{
    valueFour += 1
    document.getElementById("part-four").innerHTML = valueFour
    target()
    if (valueFourh >= 99){
            valueFour -= 1
    }})

/*const target = document.getElementById("target");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = parseFloat(button.innerText);

        value++;

        if (value > parseFloat(button.getAttribute("data-max"))) {
            value = button.getAttribute('data-min');
        }

        button.innerText = `${value}`.padStart(2, "0");

        target.innerText = `+${buttons.map(btn => btn.innerText).join('')}`;
    });
});*/

})();
