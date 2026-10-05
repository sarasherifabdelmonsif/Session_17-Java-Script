/*Events*/

//let myEvent = new Event("build")
/*
let myEvent = new CustomEvent("build", {
    detail: {
        userName: "Mohamed",
        age: 25
    }
})
document.addEventListener("build", function (e) {
    console.log(e)
})
 */

/* ANIMATION */
/*
let btnStart = document.querySelector('button.start'),
    btnStop = document.querySelector('button.stop'),

    div = document.querySelector("div");
let keyFrames = [
    { transform: "translateY(0px)" },
    { transform: "translateY(300px)" },
],
    options = {
        duration: 1000,
        iterations: 2,
        direction: "alternate",
        fill: "forwards"
    };
let animation = div.animate(keyFrames, options);
animation.pause();
btnStart.addEventListener("click", function () {
    animation.play();
})
btnStop.addEventListener("click", function () {
    animation.finish();
}) *//*
let myParent = document.querySelector(".parent"),
    myChild = document.querySelector(".child"),
    myBtn = document.querySelector("button.start");

console.log(`clientWidth:${myChild.clientWidth}`)  //width+Padding
console.log(`clientHeight:${myChild.clientHeight}`)  //Height+Padding

console.log("=========================================");

console.log(`scrollWidth:${myChild.scrollWidth}`)  //width+Padding+scroll
console.log(`scrollHeight:${myChild.scrollHeight}`)  //Height+Padding+scroll

console.log("=========================================");

console.log(`offsetWidth:${myChild.offsetWidth}`)  //width+Padding+Border
console.log(`offsetHeight:${myChild.offsetHeight}`)  //Height+Padding+Border


console.log("=========================================");
console.log(`offsetLeft: ${myChild.offsetLeft}`)  //offsetLeft
console.log(`offsetTop: ${myChild.offsetTop}`)  //offsetTop

console.log("=========================================");

myBtn.addEventListener("click", function () {
    console.log(`scrollLeft: ${myChild.scrollLeft}`)  //scrollLeft
    console.log(`scrollTop: ${myChild.scrollTop}`)  //scrollTop
}) */

/* **************** BOM ************************** */
//Browser Object Model//
/* console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(window.location);
console.log(window.location.href);
alert("OK");
confirm("Are You Sure?")
console.log(confirm("Are You Sure?"))

function deleteUser() {
    if (!confirm("Are You Sure?")) {
        return
    }

    //Code
} */

//prompt("Enter Name", "Mohamed")
/* function booom() {
    console.log("BOOOOOM")
} */

//setTimeout(booom, 1000)
/* let x = setInterval(booom, 1000)
document.querySelector("button.stop").addEventListener("click",
    function () {
        clearInterval(x)
    }
) */
/*

let newWindow = open("https://www.google.com", "_blank", "width=500px,height=500px");
//open("https://www.google.com", "_self");
console.log(newWindow)
//newWindow.moveTo(300, 300)
//newWindow.moveBy(300, 300)
function myFun() {
    newWindow.moveBy(300, 300)
} */
/* function myFun() {
    window.scrollTo(0, 100)
} */
/*
function myFun() {
    window.scrollBy(0, 100)
} */