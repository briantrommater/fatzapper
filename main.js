//local storage 
const getsavedScore = () => {
    let savedScore = localStorage.getItem("score")
    savedScore = parseInt(savedScore)
    return savedScore ? savedScore:  0
}

//declare variables
let score = getsavedScore(),
start = document.getElementById('start'),
p100 = document.getElementById('p100'),
p50 = document.getElementById('p50'),
p25 = document.getElementById('p25'),
m25 = document.getElementById('m25'),
cals = document.getElementById('cals'),
scale = document.getElementById('weight'),
scoreboard = document.getElementsByClassName('scoreboard');

//calories
let renderScore = () => {
    cals.textContent = score;
}

renderScore();

//ounces
let renderWeightLoss = () => {
    scale = (2700 - score)/ 218.75;
    weight.textContent = scale.toFixed(1);
   
}

renderWeightLoss();

//5 click events
p100.addEventListener('click', () => {
    localStorage.setItem("score", score+= 100);
    renderScore(); 
    renderWeightLoss(); 
    show();
});

p50.addEventListener('click', () => {
    localStorage.setItem("score", score += 50)
    renderScore(); 
    renderWeightLoss(); 
    show();
});

p25.addEventListener('click', () => {
    localStorage.setItem("score", score += 25)
    renderScore();
    renderWeightLoss(); 
    show();
});

m25.addEventListener('click', () => {  
    localStorage.setItem("score", score-= 25)
    renderScore(); 
    renderWeightLoss(); 
    show();
});

reset.addEventListener('click', () => {
    localStorage.clear();
    location.reload(true);
});

//some background manipulation events and sounds
/* let show = () => {
Have     
    if (cals.textContent < -1000) {
        document.body.style.background = "linear-gradient(to right, #7fff00, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= -1000 && cals.textContent < -800) {
        document.querySelector("#drips").play();
        document.body.style.background = "linear-gradient(to right, #76D7EA, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= -800 && cals.textContent < -600) {
        document.querySelector("#drips").play();
        document.body.style.background = "linear-gradient(to right, #DA2C43, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= -600 && cals.textContent < -400) {
        document.querySelector("#drips").play();
        document.body.style.background = "linear-gradient(to right, #FFF700, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= -400 && cals.textContent < -200) {
        document.querySelector("#drips").play();
        document.body.style.background = "linear-gradient(to right, #66FF66, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= -200 && cals.textContent < 0) {
        document.body.style.background = "linear-gradient(to right, #00bfff, rgba(0, 0, 0, 0)"
    }
    else if (cals.textContent >= 50 && cals.textContent < 400) {
        document.querySelector("#yum").play();
        document.body.style.background = "linear-gradient(to right, rgb(111, 159, 216), rgba(0, 0, 0, 0), rgb(111, 159, 216))"
    }
    else if (cals.textContent >= 400 && cals.textContent < 700) {
        document.body.style.background = "linear-gradient(to right, rgb(220, 76, 70), rgba(0, 0, 0, 0), rgb(220, 76, 70))"
    }
    else if (cals.textContent >= 700 && cals.textContent < 1000) {
        document.querySelector("#burp").play();
        document.body.style.background = "linear-gradient(to right, #87FF2A, rgba(0, 0, 0, 0), #87FF2A)"        
    }
    else if (cals.textContent >= 1000 && cals.textContent < 1300) {
        document.body.style.background = "linear-gradient(to right, #E936A7, rgba(0, 0, 0, 0.2), #E936A7)"        
    }
    else if (cals.textContent >= 1300 && cals.textContent < 1600) {
        document.querySelector("#bark").play();
        document.body.style.background = "linear-gradient(to right, #FFF700, rgba(0, 0, 0, 0), #FFF700)"        
    }
    else if (cals.textContent >= 1600 && cals.textContent < 1900) {
        document.body.style.background = "linear-gradient(to right, #9C51B6, rgba(0, 0, 0, 0.4), #9C51B6)"        
    }
    else if (cals.textContent >= 1900 && cals.textContent < 2200) {
        document.querySelector("#bark1").play();
        document.body.style.background = "linear-gradient(to right, #0066FF, rgba(0, 0, 0, 0), #0066FF)"        
    }
    else if (cals.textContent >= 2200 && cals.textContent < 2500) {
        document.body.style.background = "linear-gradient(to right, #B33B24, rgba(0, 0, 0, 0.6))"                
    }
    else if (cals.textContent >= 2500 && cals.textContent < 2800) {
        document.querySelector("#snow").play();
        document.body.style.background = "linear-gradient(to left, #7BA05B, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 2800 && cals.textContent < 3200) {
        document.body.style.background = "linear-gradient(to right, #0A7E8C, rgba(0, 0, 0, 0.8))"                        
    }
    else if (cals.textContent >= 3200 && cals.textContent < 3600) {
        document.body.style.background = "linear-gradient(to left, #FF7F49, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 3600 && cals.textContent < 4100) {
        document.querySelector("#howl").play();
        document.body.style.background = "linear-gradient(to right, #B5B35C, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 4100 && cals.textContent < 4600) {
        document.body.style.background = "linear-gradient(to left, #0A7E8C, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 4600 && cals.textContent < 5100) {
        document.body.style.background = "linear-gradient(to right, #A57164, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 5100 && cals.textContent < 5600) {
        document.body.style.background = "linear-gradient(to left, #AF6E4D, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 5600) {
        document.querySelector("#fl").play();
        document.body.style.background = "linear-gradient(to right, #1B1B1B, rgba(0, 0, 0, 0))"                       
    }
} */
