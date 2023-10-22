// navbar new
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '0px';
    }
}


// read more
const readMoreBtn = document.querySelector('.read-more-btn');
const readMoreText = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', () => {
    readMoreText.classList.toggle('hidden');
    if (readMoreText.classList.contains('hidden')) {
        readMoreBtn.textContent = 'Read More';
    } else {
        readMoreBtn.textContent = 'Read Less';
    }
});
