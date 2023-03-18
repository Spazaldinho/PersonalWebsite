window.addEventListener('load', function() {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.opacity = 0;
    }
  
    var delay = 1000; // change this value to adjust the delay time
  
    setTimeout(function() {
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.opacity = 1;
        sections[i].style.transition = 'opacity 1s ease ' + (i * 0.3 + 0.3) + 's';
      }
    }, delay);
  });
  