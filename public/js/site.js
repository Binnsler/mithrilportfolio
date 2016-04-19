// This block controls image hover state
var splashPortrait = document.getElementById('splash-portrait-container'),
      calloutText = document.getElementById('callout-text'),
      paragraphText = document.getElementById('callout-paragraph');
      // creditText = document.getElementById('callout-credit');

if(splashPortrait){
    splashPortrait.addEventListener('mouseover', function(){
      splashPortrait.style.background = 'rgba(133, 157, 72, 0.9)';
      calloutText.style.display = 'block';
      if(paragraphText){
        paragraphText.style.display = 'block';
      }
    })

    splashPortrait.addEventListener('mouseout', function(){
      splashPortrait.style.background = 'none';
      calloutText.style.display = 'none';
      if(paragraphText){
        paragraphText.style.display = 'none';
      }
    })
}
