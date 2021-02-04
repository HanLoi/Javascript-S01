//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
        const personn = class {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
        }

            sayhello () {
                return console.log("Hello " + this.firstname +" " + this.lastname)
            }
        };


    
    document.getElementById("run").addEventListener("click", () => { 

        console.log(new personn ("Loïc", "Hannecart").sayhello())
        console.log(new personn("Hannecart", "Loïc"))
    })
})();
