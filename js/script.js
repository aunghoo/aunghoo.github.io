$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function top() {
    document.getElementById( 'homepage' ).scrollIntoView();    
};

function bottom() {
    document.getElementById( 'about' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 8000 );
};

bottom();