/* minha versão */
// function swithDarkLightMode() {
//   let html = document.getElementById('html');
//   html.classList.toggle('light');
// }

// window.onload = function () {
//   let button = document.getElementById('swithButton');

//   button.onclick = function () {
//     swithDarkLightMode();
//   };
// };

/* versão do professor */
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar.png');
  } else {
    img.setAttribute('src', './assets/avatar-light.png');
  }
}
