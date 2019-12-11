var game_start = 0;
var Road  = document.getElementById('road');
var Car = document.getElementById('car');
document.addEventListener('keypress', start);
function start(e){
    console.log(e);
    if(e.which === 13 ){
        Road.classList.toggle('move-right');
        Car.classList.toggle('suspension');
        if(game_start === 0){
            game_start = 1;
        }
        else{
            game_start = 0;
        }
    }
}
document.addEventListener('keypress',jump);

function jump(e){
    if(game_start === 1){
        if(e.which === 32){
            Car.classList.add('jump');
            Car.classList.remove('suspension');
            Car.addEventListener('animationend',()=>{
                console.log("jump done");
                Car.classList.remove('jump');
                Car.classList.add('suspension');
            })
        }
    }
    
}







// $(document).ready(function(){
  
//     $road = $('.road');
//     $car = $('.car');

//     $(document).on('keypress',function(e){
//         if(e.which == 13){
//             $($road).toggleClass('move-right');
            
//         }


//     })
// })
// window.onload = main;
// var game_start = 0;
// function main(){
//     var road = document.getElementById('road');
//     var car = document.getElementById('car');
//     var obs = document.getElementById('obs');
    

//     document.addEventListener('keypress', start);
//     function start(e){
//         if(e.which = 13){
//            road.classList.toggle('move-right'); 
//            game_start = 1;  
//         }   
//     }
// }

// if(game_start = 1){
//         document.addEventListener('keypress', jump);
//     }
//     function jump(e){
//         if(e.which = 32){
//             car.classList.toggle('jump');
//         }
//     }