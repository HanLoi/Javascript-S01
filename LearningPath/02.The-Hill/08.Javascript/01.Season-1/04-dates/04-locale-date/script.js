
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let current = new Date()
    let day = current.toString()
    document.getElementById("target").innerHTML = day
})();
