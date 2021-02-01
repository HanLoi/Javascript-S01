
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

        function red() {
        document.body.style.backgroundColor = "red";}

            const performOperation = operation => {

                
                switch (operation) {
                    case "Red" :
                        red();
                        break;
                    case "green" :
                        document.body.style.backgroundColor = "green";
                        break;
                    case "yellow" :
                        document.body.style.backgroundColor = "yellow";
                        break;
                    case "blue" :
                        document.body.style.backgroundColor = "blue";
                        break;
                }



            Array.from(document.querySelectorAll("button")).forEach($btn =>
                $btn.addEventListener(
                    "click",
                    () => (performOperation($btn.id), false),
    // your code here

})();
