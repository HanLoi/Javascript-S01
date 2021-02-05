// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        let a = document.getElementById("pass-one")
        let b = document.getElementById("pass-two")

        if (a != b) {
            document.getElementById("pass-one").style.borderColor = "red"
            document.getElementById("pass-two").style.borderColor = "red"
        }
    })
    


})();
