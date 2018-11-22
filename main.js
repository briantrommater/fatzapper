const getsavedScore = () => {
    let savedScore = localStorage.getItem("score")
    savedScore = parseInt(savedScore)
    return savedScore ? savedScore:  0
}

let score = getsavedScore(),
p100 = document.getElementById('p100'),
p50 = document.getElementById('p50'),
m100 = document.getElementById('m100'),
m50 = document.getElementById('m50'),
cals = document.getElementById('cals'),
scale = document.getElementById('weight');




const renderScore = function () {
    cals.textContent = score
}

renderScore();

const renderWeight = function () {
    scale = (2750 - score)/3600;
    weight.textContent = scale.toFixed(2);
}


renderWeight(); 

scale = scale;
scale = weight.innerHTML;
p100.addEventListener('click', () => {
   localStorage.setItem("score", score+= 100)
   renderScore() 
});

p50.addEventListener('click', () => {
  
    localStorage.setItem("score", score += 50)
    renderScore() 
});

m100.addEventListener('click', () => {
   
    localStorage.setItem("score", score -= 100)
    renderScore() 
});

m50.addEventListener('click', () => {
   
    localStorage.setItem("score", score-= 50)
    renderScore() 
});


let show = () => {
    
    if (cals.textContent <= 1700) {
        let obese = document.getElementById("third");
        obese.style.display = "block";
    }
   else if (cals.textContent >= 1750 && cals.textContent <= 2100) {
        let obese = document.getElementById("quarter");
        obese.style.display = "block";
    }
    else if (cals.textContent >= 2150 && cals.textContent <= 2600) {
        let obese = document.getElementById("dime");
        obese.style.display = "block";
    }
    else if (cals.textContent >= 2650 && cals.textContent <= 2900) {
        let obese = document.getElementById("penny");
        obese.style.display = "block";
    }
    else if (cals.textContent > 2900) {
        let obese = document.getElementById("breast");
        obese.style.display = "block";
    }
    else if (cals.textContent > 3500) {
        let obese = document.getElementById("door");
        obese.style.display = "block";
    }
    else if (cals.textContent > 4000) {
        let obese = document.getElementById("man");
        obese.style.display = "block";
    }
    else if (cals.textContent > 4500) {
        let obese = document.getElementById("slam");
        obese.style.display = "block";
    }
    else if (cals.textContent > 5000) {
        let obese = document.getElementById("sumo");
        obese.style.display = "block";
    }
    else if (cals.textContent > 5500) {
        let obese = document.getElementById("girl");
        obese.style.display = "block";
    }
    else {
        let crazy = document.getElementById("duck")
            crazy.style.display = "block"
            
    }
}
show();

setTimeout(function restart() {
    location.reload(true);
}, 15000);

