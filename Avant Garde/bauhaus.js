//// Navigation bar////
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

//Shapess
const backgroundShapes = document.querySelector('.background-shapes');

function createShape() {
  const shape = document.createElement('div');
  shape.classList.add('shape');
  backgroundShapes.appendChild(shape);
}


//content
// https://youtu.be/peFOHcbEUig
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);
checkBoxes();

function checkBoxes()
{
    const triggerBottom = window.innerHeight/5 *4;


    boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
        box.classList.add('show');
    } else {
        box.classList.remove('show');
    }
    });
}