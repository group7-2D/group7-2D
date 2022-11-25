//ScrollReveal Stuff, will be used for general fading in

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  ScrollReveal().reveal('.slideup', { delay: 500, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.slideleft', { delay: 300, origin: 'left' }) ;
  ScrollReveal().reveal('.slideright', { delay: 500, origin: 'right' }) ;