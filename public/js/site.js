

  var splashPortrait = document.getElementById('splash-portrait-container'),
      calloutText = document.getElementById('callout-text');
      paragraphText = document.getElementById('callout-paragraph');
      creditText = document.getElementById('callout-credit');

    splashPortrait.addEventListener('mouseover', function(){
      splashPortrait.style.background = 'rgba(133, 157, 72, 0.9)';
      calloutText.style.display = 'block';
      paragraphText.style.display = 'block';
      creditText.style.display = 'block';


    })

    splashPortrait.addEventListener('mouseout', function(){
      splashPortrait.style.background = 'none';
      calloutText.style.display = 'none';
      paragraphText.style.display = 'none';
      creditText.style.display = 'none';

    })
