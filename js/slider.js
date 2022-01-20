const buttons = document.querySelectorAll('.slider_controls button');
const slides = document.querySelectorAll('.slider_item');

let addButtonClickHandler = function(button, slide) {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttons.forEach(n => n.classList.remove('current'));
    slides.forEach(n => n.classList.remove('slide_current'));
    button.classList.add('current');
    slide.classList.add('slide_current');
  })
}
for (i=0; i < buttons.length; i++) {
  addButtonClickHandler(buttons[i], slides[i])
}