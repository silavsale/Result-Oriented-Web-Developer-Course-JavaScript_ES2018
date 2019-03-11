let li = document.createElement('li');
li.textContent = 'Task 3';
let ul = document.querySelector('ul');
let first = ul.children[0];
ul.insertBefore(li, first);
first.style.color = 'orange';
li.style.color = 'maroon';

let lia = document.createElement('li');
lia.textContent = 'Task 4';
let ula = document.querySelector('ul');
ula.appendChild(lia);
lia.style.color = 'green';


let lidiv = document.createElement('h1');
lidiv.textContent = 'Task 4';
let ulaa = document.querySelector('ul');
ulaa.appendChild(lidiv);

let h11 = document.querySelector('h1');
h11.style.color = 'red';
h11.style.margin = '140px';

let btn = document.querySelector('.btn');

btn.onclick = function () {
    h11.textContent = "Button clicked!";
}
