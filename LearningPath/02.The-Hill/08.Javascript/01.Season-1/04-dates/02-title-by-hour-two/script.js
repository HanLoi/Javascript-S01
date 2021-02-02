
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var myDate = new Date(); 
    var x =  myDate.getHours() * 60
    var y = myDate.getMinutes() + x
       
        if (  y <= 1050 ) 
            {     document.getElementById('target').innerHTML ="Hello"; } 
        else
             { document.getElementById('target').innerHTML= "Good Evening!"; } 

})();