const clock = document.querySelector("#clock");

// lelog(t date = new Date();
// console.date.toLocaleTimeString());






setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);