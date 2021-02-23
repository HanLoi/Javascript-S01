(() => {

    let i = 0;
    let txt = document.getElementById("target").innerHTML; /* The text */
  

    function suppression() {

        document.getElementById("target").innerHTML = "";

    }

    function typeWriter() {

        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 250);
        }

    }

    suppression();
    typeWriter();

})();