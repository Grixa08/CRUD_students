var full_screen = document.getElementById('main');
var in_circle = document.getElementById("in_circle");
var time = document.getElementById('time');
var first = document.getElementById('first');
var header = document.getElementById('header');
var level = 9;
var right_answer = 0;

var times = document.getElementById('times');
var lev_now = document.getElementById('level');
var prize = document.getElementById('prize');
var bonus = document.getElementById('bonus');
var num = document.getElementById('num');

var table = document.getElementById('table');


full_screen.addEventListener('click', () => {
    toggle_visibility('main');
    add_visibility('time');
    timedInfo(); 
})

function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.visibility = 'hidden';
}

function add_visibility(id) {
    var e = document.getElementById(id);
    e.style.visibility = 'visible';
}


function timedInfo() {
        setTimeout(one, 100)
        setTimeout(two, 2000)
        setTimeout(three, 3000)
        setTimeout(foue, 4000)
}
function one() {
    in_circle.innerHTML = "3";
}
function two() {
    in_circle.innerHTML = "2";
}
function three() {
    in_circle.innerHTML = "1";
}

function foue() {
    time.style.visibility = 'hidden';
    first.style.visibility = 'visible';
    createScreen()
}

function createScreen(){
    pickColor(first)
    header.style.background = secondColor(first.style.background);
    add_numbers()
    createTable(table)
}


function pickColor(x) { 

    var colors = [ 
        '#86b646', '#f28e38', '#fd73af', 
        '#4db8ec', '#8e3dca'
    ]; 

    // selecting random color 
    var random_color = colors[(Math.floor( 
            Math.random() * colors.length))]; 

    x.style.background = random_color; 
} 

function secondColor(color){
    switch (color) {
        case "rgb(77, 184, 236)":
            var se_color = '#94d5f5';
            break;
        case "rgb(134, 182, 70)":
            var se_color = '#bfdf94';
            break;
        case "rgb(253, 115, 175)":
            var se_color = '#fdabd1';
            break;
        case "rgb(142, 61, 202)":
            var se_color = '#bb8bdf';
            break;
        case "rgb(242, 142, 56)":
            var se_color = '#f7bb87';
            break;
      }
    return se_color;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function maximum(level){
    switch (level) {
        case 1:
            var max = 8;
            break;
        case 2:
            var max = 98;
            break;
        case 3:
            var max = 998;
            break;
        case 4:
            var max = 998;
            break;
        case 5:
            var max = 998;
            break;
        case 6:
            var max = 998;
            break;
        case 7:
            var max = 9998;
            break;
        case 8:
            var max = 9998;
            break;
        case 9:
            var max = 9998;
            break;
      }
    return max;
}

function minimum(level){
    switch (level) {
        case 1:
            var min = 1;
            break;
        case 2:
            var min = 1;
            break;
        case 3:
            var min = 10;
            break;
        case 4:
            var min = 100;
            break;
        case 5:
            var min = 100;
            break;
        case 6:
            var min = 100;
            break;
        case 7:
            var min = 1000;
            break;
        case 8:
            var min = 1000;
            break;
        case 9:
            var min = 1000;
            break;
      }
    return min;
}

function createTable(div){
    switch (level) {
        case 1:
            var clas = 'f-s'
            break;
        case 2:
            var clas = 'f-s'
            break;
        case 3:
            var clas = 't-f'
            break;
        case 4:
            var clas = 't-f'
            break;
        case 5:
            var clas = 't-f'
            break;
        case 6:
            var clas = 's-s'
            break;
        case 7:
            var clas = 's-s'
            break;
        case 8:
            var clas = 'e-n'
            break;
        case 9:
            var clas = 'e-n'
            break;
      }
    div.classList.add(clas);
    var sq = number_number(level);
    while (sq > 0){
        var cell = document.createElement('h1');
        if (level < 8){
            cell.classList.add('ca');
        }
        else{cell.classList.add('co');}
        cell.innerHTML = randomInteger(minimum(level), maximum(level))
        div.append(cell);
        pickColor(cell)
        sq -= 1;
    }
}

function number_number(level){
    switch (level) {
        case 1:
            var number = 6;
            break;
        case 2:
            var number = 6;
            break;
        case 3:
            var number = 12;
            break;
        case 4:
            var number = 12;
            break;
        case 5:
            var number = 12;
            break;
        case 6:
            var number = 16;
            break;
        case 7:
            var number = 16;
            break;
        case 8:
            var number = 25;
            break;
        case 9:
            var number = 25;
            break;
      }
    return number
}

function add_numbers(){
    lev_now.innerText = `${level}-9`;
    bonus.innerText = `x${right_answer}`;
    num.innerText = randomInteger(minimum(level), maximum(level)) 
}