const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */
function thumbLoop() {
    for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + (i+1) + ".jpg");
    thumbBar.appendChild(newImage);
  }
  }
thumbLoop();

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
    if (e.target.className == 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  
   else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
