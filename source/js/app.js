// JavaScript
// window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

// MENU BUTTON

$(document).ready(function () {
  $(".container").click(function () {
    $(".stick").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
