
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var myDate = new Date();   
    if ( 
        myDate.getHours() < 12 )  { 
          document.getElementById('target').innerHTML ="Good Morning!"; } 
        else if (  myDate.getHours() <= 18 ) 
            {     document.getElementById('target').innerHTML ="Hello"; } 
        else if ( myDate.getHours() > 18 && myDate.getHours() <= 24 )
             {     document.getElementById('target').innerHTML= "Good Evening!"; } 
         
})();
