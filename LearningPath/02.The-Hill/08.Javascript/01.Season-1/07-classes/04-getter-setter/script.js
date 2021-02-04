// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
        class personn {
            constructor(firstname,lastname){
                this.firstname=firstname
                this.lastname=lastname
            }

            get name() {
                return this.firstname +" " + this.lastname
            }

            set name(a) {
                a = a.split(" ")
                this.firstname=a[0]
                this.lastname=a[1]

            }
        }

        document.getElementById("run").addEventListener("click", ()=>{ 
            let player = new personn("Loïc", "Hannecart")
        
            console.log(player.name)

            player.name="Luc Pol"

            console.log(player.name)
            
        })
})();
