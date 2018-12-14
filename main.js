const getsavedScore = () => {
    let savedScore = localStorage.getItem("score")
    savedScore = parseInt(savedScore)
    return savedScore ? savedScore:  0
}

const getsavedWeight = () => {
    let savedWeight = localStorage.getItem("ounces")
    savedWeight = parseInt(savedWeight)
    return savedWeight ? savedWeight:  0
}

let score = getsavedScore(),
ounces = getsavedWeight(),
start = document.getElementById('start'),
p100 = document.getElementById('p100'),
p50 = document.getElementById('p50'),
m100 = document.getElementById('m100'),
m50 = document.getElementById('m50'),
cals = document.getElementById('cals'),
weight = document.getElementById('weight'),
height = document.getElementById('tall'),
lbs = document.getElementById('fat'),
scoreboard = document.getElementsByClassName('scoreboard'),
michaelScott;

const begin = () => {
    if (score == 0) {
        let theseAppear = document.getElementsByClassName("instruct1");
        for (let thing of theseAppear) {
            thing.style.display = "block";
        }
    }
    else {
        let theseAppear = document.getElementsByClassName("scoreboard");
        for (let thing of theseAppear) {
            thing.style.display = "block";
        }
    }
}

begin();

next.addEventListener('click', () => {
    let theseDisappear = document.getElementsByClassName("instruct1");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
        }
    let theseAppear = document.getElementsByClassName("instruct2");
        for (let thing of theseAppear) {
            thing.style.display = "block";
        }  
});

gotit.addEventListener('click', () => {
    let theseDisappear = document.getElementsByClassName("instruct2");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
        }
    let theseAppear = document.getElementsByClassName("instruct21");
        for (let thing of theseAppear) {
            thing.style.display = "block";
        }  
        document.querySelector("#bark1").play();
});

woof.addEventListener('click', () => {
    let theseDisappear = document.getElementsByClassName("instruct21");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
        }
    let theseAppear = document.getElementsByClassName("instruct3");
        for (let thing of theseAppear) {
            thing.style.display = "block";
        }  
        document.querySelector("#growl").play();
});

start.addEventListener('click', () => {
    let theseDisappear = document.getElementsByClassName("instruct3");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
        }
    let theseAppear = document.getElementsByClassName("instruct4");
        for (let thing of theseAppear) {
            thing.style.display = "block";
            document.body.style.background = "pink";
        }  
});

okAlready.addEventListener('click', () => {
    let theseDisappear = document.getElementsByClassName("instruct4");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
        }
    let theseAppear = document.getElementsByClassName("scoreboard");
        for (let thing of theseAppear) {
            thing.style.display = "block";
            document.body.style.background = "linear-gradient(to right, #66FF66, rgba(0, 0, 0, 0)";
        }  
        document.querySelector("#bark").play();
});

document.querySelector("#miff").addEventListener("submit", (e) => {
    e.preventDefault();
    let heightp = e.target.elements.height.value;
    let height = parseFloat(heightp);
    let wtp = e.target.elements.heavy.value;
    let wt = parseFloat(wtp);
    let ms = ((5.68 * wt) + (19.84 * height) - 366);
    michaelScott = ms;
})

let renderScore = () => {
    cals.textContent = score;
}

let renderWeight = () => {
    weight.textContent = ounces;
    console.log(weight.textContent);

}

renderScore();
renderWeight();

let renderWeightLoss = () => {
    ounces = (michaelScott - score)/218.75;
    weight.textContent = ounces.toFixed(1);
    console.log(weight.textContent);
    console.log(michaelScott);
}

p100.addEventListener('click', () => {
    localStorage.setItem("score", score+= 100)
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

m100.addEventListener('click', () => {
    localStorage.setItem("score", score -= 100)
    renderScore();
    renderWeightLoss(); 
    show();
});

m50.addEventListener('click', () => {  
    localStorage.setItem("score", score-= 50)
    renderScore(); 
    renderWeightLoss(); 
    show();
});

reset.addEventListener('click', () => {
    localStorage.clear();
    location.reload(true);
});

let show = () => {
    
    if (cals.textContent < -300) {
        document.body.style.background = "linear-gradient(to right, Chartreuse, rgba(0, 0, 0, 0), Chartreuse)"
    }
    else if (cals.textContent >= -300 && cals.textContent < 0) {
        document.body.style.background = "linear-gradient(to right, DeepSkyBlue, rgba(0, 0, 0, 0), DeepSkyBlue)"
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
        document.body.style.background = "linear-gradient(to right, #E936A7, rgba(0, 0, 0, 0), #E936A7)"        
    }
    else if (cals.textContent >= 1300 && cals.textContent < 1600) {
        document.querySelector("#burpb").play();
        document.body.style.background = "linear-gradient(to right, #FFF700, rgba(0, 0, 0, 0), #FFF700)"        
    }
    else if (cals.textContent >= 1600 && cals.textContent < 1900) {
        document.body.style.background = "linear-gradient(to right, #9C51B6, rgba(0, 0, 0, 0), #9C51B6)"        
    }
    else if (cals.textContent >= 1900 && cals.textContent < 2200) {
        document.body.style.background = "linear-gradient(to right, #0066FF, rgba(0, 0, 0, 0), #0066FF)"        
    }
    else if (cals.textContent >= 2200 && cals.textContent < 2500) {
        document.body.style.background = "linear-gradient(to right, #B33B24, rgba(0, 0, 0, 0))"                
    }
    else if (cals.textContent >= 2500 && cals.textContent < 2800) {
        document.body.style.background = "linear-gradient(to left, #7BA05B, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 2800 && cals.textContent < 3200) {
        document.querySelector("#snow").play();
        document.body.style.background = "linear-gradient(to right, #0A7E8C, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 3200 && cals.textContent < 3600) {
        document.body.style.background = "linear-gradient(to left, #FF7F49, rgba(0, 0, 0, 0))"                        
    }
    else if (cals.textContent >= 3600 && cals.textContent < 4100) {
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
}
