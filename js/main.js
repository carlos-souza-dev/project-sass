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
})()