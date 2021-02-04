// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    

    var a = new Number(0)
    
    document.querySelector("img").setAttribute("src", gallery [a])

    console.log(a)
    document.getElementById("next").addEventListener("click", ()=>{

        a = a + 1;
       
      
        return a
    })


 
})();
