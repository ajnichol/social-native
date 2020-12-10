var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modal-btn');
var modalTitle = document.getElementById('modal-title');

modalBtn.addEventListener('click', function() {
  modal.classList.add('visible');
});

document.addEventListener('click', function(event) {
  if (event.target.id == 'main-div') {
    modal.classList.remove('visible');
  }
});

window.onresize = function() {
  console.log(window.innerWidth);
  if (window.innerWidth <= 730) {
    modalTitle.innerHTML = 'Mobile Title Here';
  } else if (window.innerWidth > 730) {
    modalTitle.innerHTML = 'Desktop Title Here';
  }
}
