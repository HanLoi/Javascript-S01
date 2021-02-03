// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        var moi = new Object()
        var moi = {lastname:"Hannecart",firstname:"Loïc",age:"27",city:"Charleroi",country:"belgium"}
        
        console.log("Je me présente. Je m'appel "+ moi.lastname+ " "+ moi.firstname+". J'ai "+moi.age+" et j'habite à "+moi.city+" en "+moi.country)
    })
})();
