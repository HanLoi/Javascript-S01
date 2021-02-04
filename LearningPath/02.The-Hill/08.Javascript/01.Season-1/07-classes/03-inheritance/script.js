// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class dog extends Animal {
        constructor(name,greeting){
            this.name = name;
            static greeting= greeting
        }
            static greeting() {
                return "Hello"}

            super.sayHello()

    }
}


    document.getElementById("run").addEventListener("click", () => { 

        console.log( toutou = new dog("Tête de con" , "Hola").sayHello())

    })
})();
