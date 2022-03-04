const header = document.querySelector('.header-view');

window.onscroll = function() {
    var top = window.scrollY;
    
    if (top >= 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}