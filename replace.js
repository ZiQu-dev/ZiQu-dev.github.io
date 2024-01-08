document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let lid = document.getElementById("lid");
        let lidu = document.getElementById("upperlid");
        let lidd = document.getElementById("downlid");
        lid.style.animationName = "close-d";
        lidu.style.animationName = "closeu-d";
        lidd.style.animationName = "closed-d";
        lid.style.animationDuration = "20s";
        lidu.style.animationDuration = "20s";
        lidd.style.animationDuration = "20s";
        lid.style.animationIterationCount = "infinite";
        lidu.style.animationIterationCount = "infinite";
        lidd.style.animationIterationCount = "infinite";
        let blink = document.getElementById("particles-js");
        blink.style.animationName = "blink";
        blink.style.animationIterationCount = "infinite";
        blink.style.animationDuration = "20s";
    }, 1000);
});