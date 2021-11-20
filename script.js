const imageButtons = document.querySelectorAll('.image-buttons');
const portfolio = document.querySelectorAll('.portfolio-item');
const portfolioLength = portfolio.length;
const navDotContainer = document.querySelector('#nav-dot-container');
const root = document.documentElement;

imageButtons.forEach(item => {
    item.addEventListener('click', slideImages, false);
});

function createNavDots(){
    let j = 0;
    while (j < portfolioLength) {
        var dot = document.createElement('button');
        dot.setAttribute('id', j);
        dot.setAttribute('class', 'nav-dots');
        dot.addEventListener('click', linkDotToImage, false);
        navDotContainer.appendChild(dot);
        j++;
    }
};
createNavDots();

let i = 0;
function slideImages(e) {
    e.target.id === 'back-button' ? slideImagesBackwards() : slideImagesForward();
};

function slideImagesForward() {
    i<(portfolioLength-1) ? ++i : i = 0;
    root.style.setProperty('--selected-image', i);
    updateNavDots();
};

function slideImagesBackwards() {
    i>0 ? --i : i = portfolioLength -1;
    root.style.setProperty('--selected-image', i);
    updateNavDots();
};

function linkDotToImage(e){
    i = e.target.id;
    root.style.setProperty('--selected-image', i);
    updateNavDots();
};

function updateNavDots(){
    const navDots = document.querySelectorAll('.nav-dots');
    navDots.forEach(item => {
        if (item.id == i) {
            item.style.backgroundColor = 'rgb(13, 22, 70)';
        } else {
            item.style.backgroundColor = 'white';
        }
    })
};

setInterval(slideImagesForward, 5000);
updateNavDots();
