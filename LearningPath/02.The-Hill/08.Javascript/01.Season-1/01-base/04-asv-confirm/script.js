
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
})();
    function data() {
    var age = prompt ("What's your age ?")
    var gender = prompt ("Are you a male of female ?")
    var country = prompt ("Where do you from ?")

    alert ("You are " + age + " years old. You are a " + gender + " and you live in " + country)
    
    return confirm ("Can you confirm ?");
    
    

    }

    while (!data()) {
        alert ("Ok we repeat")
    }