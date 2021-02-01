
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function plus(a,b) {
        return (a + b);
    }

    function minus(a,b) {
        return (a - b);
    }

    function multiply(a,b) {
        return (a * b);
    }

    function divide(a,b) {
        return (a / b);
    }

    const performOperation = operation => {
        // perform the operation
        a = new Number(document.getElementById("op-one").value)
        b = new Number(document.getElementById("op-two").value)
        
        switch (operation) {
            case "addition" :
                alert (plus(a,b));
                break;
            case "substraction" :
                alert (minus(a,b));
                break;
            case "multiplication" :
                alert (multiply(a,b));
                break;
            case "division" :
                alert (divide(a,b));
                break;
        }
    };

   

     Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
