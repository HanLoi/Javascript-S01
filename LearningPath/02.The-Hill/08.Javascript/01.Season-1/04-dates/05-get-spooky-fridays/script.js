
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    // var year = document.getElementById("year")

    function friday13th (year) {
        var d = new Date();
        var counter = 0;
        var month;
    
        for(month=0;month<12;month++)
        {
         d.setFullYear(year, month,13);
            if (d.getDay() == 5)
            {
              counter++;
            }
        }
    
        return counter;                            
    }

    document.getElementById("run").addEventListener("click", friday13th(document.getElementById("year"))
        
})();
