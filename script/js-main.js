// Smooth Sroll
$('#navbar a,  .btn, #services').on('click', function(_event) {
    if(this.hash !== '') {
        _event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 80
        };
        800
        );
    }
});