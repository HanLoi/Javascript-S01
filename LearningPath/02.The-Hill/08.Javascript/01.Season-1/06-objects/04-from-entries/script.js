// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        
        var newarr = keys.map((element,i) => {
            return [keys[i], values[i]]
          });
        
          const arr = Object.fromEntries(newarr)
    
        console.log(newarr)
        console.log(Object.keys(arr))
        console.log(Object.values(arr))
    })
})();
