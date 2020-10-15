(function(){
var figure = document.querySelectorAll(".coursel figure");
var prev = document.querySelector(".coursel .prev")
var next = document.querySelector(".coursel .next")

    figure[0].classList.add('show');
    var counter = 0;
    
    
    prev.addEventListener('click', function(){
        
            if(counter == 0){
                counter = 3;
                figure[counter-3].classList.remove('show');
                figure[counter].classList.add('show');
            } else if (counter > 0){
                figure[counter].classList.remove('show');
                counter--;
                figure[counter].classList.add('show');
            }
    })

    next.addEventListener('click', function(){
        
        counter++;
        if(counter < 4){
            figure[counter-1].classList.remove('show');
            figure[counter].classList.add('show');
        } else {
            figure[counter-1].classList.remove('show');
            counter = 0;
            figure[counter].classList.add('show');
        }
    })
    
})()
