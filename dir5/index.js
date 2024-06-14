const username = "Ivan";
console.log("Yo, ", username);

// Randomize


let randomNum;

function randomNumber(){
    let a = Number(document.getElementById("numA").value);
    let b = Number(document.getElementById("numB").value);
    try{
        if ((isNaN(a) || isNaN(b)) && a != 0 && b != 0)
        {
            document.getElementById("randomNum").textContent = "U stupid";
            throw "Inappropriate input!";
        }         
        if (a > b)
        {
            document.getElementById("randomNum").textContent = "U stupid";
            throw "Bro?";
        }  
        randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        console.log(randomNum);
        document.getElementById("randomNum").textContent = randomNum;
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("A = ", a);
        console.log("B = ", b);
    }
}

// Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector("#overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        randomNumber();
        openModal(modal);
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach (modal =>{
        closeModal(modal);
    })
})

window.addEventListener("keydown", (event) => {
    const modals = document.querySelectorAll('.modal.active');
    switch(event.key){
        case "Escape":
            modals.forEach (modal =>{
                closeModal(modal);
            })
            break;
    }
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    })
})

function openModal(modal){
    if (modal == null) 
        return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if (modal == null) 
        return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

/*
let randomNum;
let a; let b;
// ебануть try catch

document.getElementById("randomButton").onclick = function(){
    a = Number(document.getElementById("numA").value);
    b = Number(document.getElementById("numB").value);
    try{
        if ((a == "" || b == "" || isNaN(a) || isNaN(b)) && a != 0 && b != 0) 
            throw "Inappropriate input!";
        if (a > b)
            throw "Bro?";
        randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        console.log(randomNum);
        window.alert("Random number: " + randomNum);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("A = ", a);
        console.log("B = ", b);
    }
}
*/

// Spread operator 
/*
let num = [1, 2, 3, 4, 5];
for (let i = num.length - 1; i >= 0; i -= 1){
    console.log(num[i]);
}

let max = Math.max(num);
console.log(...num);
*/

// CallBack
Sum(2, 3, displayConsole);
function Sum(x, y, CallBack){
    let result = x + y;
    CallBack(result);
}

function displayConsole(output){
    console.log(output);
}

// array functions
let numbers = [1,2,3];
let res = numbers.map((element) => Math.pow(element, 2));
res.forEach(print);

let student = ["andrew","hoang","leonid"];
student.forEach((element, index, array) => array[index] = element[0].toUpperCase() + element.substring(1));
student.forEach(print);

function print(element){
    console.log(element);
}



// object
const car = {
    color: "purple",
    model: "Audi SportBack",
    year: 2021,

    drive: function(){
        console.log("You drive the", this.color, this.model);
        //console.log(`You drive the ${this.color} ${this.model}`);
    }
}

car.drive();

// class
class Human{
    constructor(name){
        this.name = name;
    }
}

class Student extends Human{
    constructor(name){
        super(name);
    }

    get age(){
        return `${this.name} is ${this._age} years old`;
    }
    
    set age(value){
        if (value > 70)
            value = 70;
        else if(value < 18)
            value = 18;
        this._age = value;
    }
}

let students = [new Student("Leon"),
                new Student("Spike"),
                new Student("Crow"),
                new Student("Amber"),
                new Student("Sandy"),
                new Student("Meg")];

students[0].age = 16;
console.log(students[0].name);
console.log(students[0].age);

// Date
let clock = document.getElementById("time");

update();
setInterval(update, 1000);

let date = new Date();
date = date.toLocaleString();
console.log(date);

function update(){
    let date = new Date();
    date.getMonth
    clock.textContent = formatTime(date);

    function formatTime(date){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        year = formatZero(year);
        month = formatZero(month);
        day = formatZero(day);

        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);

        return `Date ${day}.${month}.${year} / Time ${hours}.${minutes}.${seconds}`;
    }
    
    function formatZero(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

// module add
import * as MathUtil from "./math_util.js";
console.log(MathUtil.PI);

console.log(MathUtil.getArea(5));

// DOM etc.

console.log(document.location);
document.body.style.background = "linear-gradient(to top, mediumorchid, pink)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit =>{
    if (fruit.checked)
        console.log(fruit.value);
});

let elements = document.querySelectorAll(".desserts");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})

let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "white";

let element = document.querySelector("[for]");
element.style.backgroundColor = "skyblue";

let vegetables = document.getElementsByTagName("li");
vegetables[1].style.backgroundColor = "lightgreen";

const vegetableList = document.querySelector("#vegetables");
const listItem1 = document.createElement("li");
listItem1.textContent = "tomato";

const listItem2 = document.createElement("li");
listItem2.textContent = "coca-cola";

vegetableList.insertBefore(listItem1, vegetableList.getElementsByTagName("li")[1]);
vegetableList.insertBefore(listItem2, vegetableList.getElementsByTagName("li")[0]);

// CSS properties
const showHideButton = document.querySelector("#showHide");
showHideButton.style.backgroundColor = "bisque";
showHideButton.style.border = "3px solid black";
showHideButton.style.borderRadius = "8px";
showHideButton.style.padding = "3px";
showHideButton.style.textAlign = "center";

const title = document.getElementById("menu");

// Events

showHideButton.addEventListener("mouseover", () => {
    showHideButton.style.backgroundColor = "rgb(42, 0, 57)";
    showHideButton.style.border = "3px solid white";
    showHideButton.style.color = "white";
    showHideButton.style.cursor = "pointer";
    showHideButton.style.transition = "0.4s";
});

showHideButton.addEventListener("mouseout", () => {
    showHideButton.style.backgroundColor = "bisque";
    showHideButton.style.color = "black";
    showHideButton.style.border = "3px solid black";
    showHideButton.style.transition = "0.8s";

});

/*title.addEventListener("click", () =>{
    alert("You clicked on menu :3");
})*/

// Image Hide
const PhilinaImage = document.querySelector("#Phil");

// Впихнуть анимацию .........................
showHideButton.addEventListener("click", () => {
    if(PhilinaImage.style.visibility == "visible"){
        PhilinaImage.style.visibility = "hidden";
        PhilinaImage.style.opacity = 0;
        PhilinaImage.style.transition = "0.5s";
        
    }
    else{
        PhilinaImage.style.visibility = "visible";
        PhilinaImage.style.opacity = 1;
        PhilinaImage.style.transition = "0.5s";
    }
        
});

// Canvas
const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");
canvas.style.border = "1px solid black";
canvas.style.visibility = "visible";

// rectangle
context.fillStyle = "skyblue";
context.fillRect(0, 0, 400, 230);
context.strokeStyle = "skyblue";
context.strokeRect(0, 0, 400, 20);

// circle
context.fillStyle = "#fca523";
context.lineWidth = 3;
context.strokeStyle = "black";
context.arc(200, 200, 150, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.fillStyle = "#222222";
context.fillRect(0, 250, 400, 400);
context.strokeStyle = "#222222";
context.strokeRect(0, 250, 400, 400);

// text
context.font = "bold 40px MV Boli";
context.fillStyle = "black";
context.textAlign = "center";
context.fillText("Sun", 200, 40);

// COOKIES

//document.cookie = "firstName=Ivan; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

/*
setCookie("firstName", "Ivan", 365);
setCookie("lastName", "Nguyen", 365);
console.log(getCookie("lastName"));*/

console.log(document.cookie);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cookieDecode = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecode.split("; ");
    let result = null;
    cookieArray.forEach(element => {
        if (element.indexOf(name) == 0)
            result = element.substring(name.length + 1);
    })
    return result;
}

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);    
    firstText.value = "";
    lastText.value = "";
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})

// localStorage

const obj = {
    name: "Ivan",
    age: 20
}

localStorage.setItem('person', JSON.stringify(obj))
const raw = localStorage.getItem('person')  // string
const person = JSON.parse(raw)  // back to object
person.name = "Philina"

console.log(person.name)
console.log(obj);

let el = document.getElementsByClassName('container')
console.log(el)

let e = document.querySelectorAll('.container')
console.log(e)
e.forEach( element => {
    console.log(element)
})

let stroka = 'ae'

function abc(text){
    return text.length > 3
}

console.log(abc(car))
