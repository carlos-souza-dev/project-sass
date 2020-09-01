(function() {
    var $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");

    // objeto para a manipulação DOM
    var menu = new Menu({
        container: '.nav',
        toggleBtn: '.btnMenu',
        widthEnabled: 1024 
    })

    var courselImgs = new Coursel({
        container: '.slider .coursel',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var courselDepoiments = new Coursel({
        container: '.slide-show',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()
