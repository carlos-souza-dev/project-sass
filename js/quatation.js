(function(){
    var figure = document.querySelectorAll(".slide-show figure");
    var prev = document.querySelector(".slide-show .prev")
    var next = document.querySelector(".slide-show .next")
    
        figure[0].classList.add('show');
        var counter = 0;
                
        prev.addEventListener('click', function(){
            
                if(counter == 0){
                    counter = 1;
                    figure[counter-1].classList.remove('show');
                    figure[counter].classList.add('show');
                } else if (counter > 0){
                    figure[counter].classList.remove('show');
                    counter--;
                    figure[counter].classList.add('show');
                }
            
            console.log("prev",counter);
        })
    
        next.addEventListener('click', function(){
            
            counter++;
            if(counter < 2){
                figure[counter-1].classList.remove('show');
                figure[counter].classList.add('show');
            } else {
                figure[counter-1].classList.remove('show');
                counter = 0;
                figure[counter].classList.add('show');
            }
    
            console.log("next",counter);
        })
        
    })()
    
    
    