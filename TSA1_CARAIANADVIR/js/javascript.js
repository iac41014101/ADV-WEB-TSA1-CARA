var colors = ['#DE3373','#FCCA28','#08A953','#F5712A','#F59EAF','#EE1B3E','#1E76B8','#7C2E87','#7A0434','#F98F81','#37BA9B','#C0C2C2'];

let button = document.getElementById('button');
let text = document.getElementById('text');

button.addEventListener('click', function(){

  var randomColor = colors[Math.floor(Math.random() * colors.length)]

  let container = document.getElementById('right');
  
  container.style.background = randomColor;
})
