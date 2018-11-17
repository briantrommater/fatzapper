const getsavedScore = () => {
    let savedScore = localStorage.getItem("score")
   savedScore = parseInt(savedScore)
    return savedScore ? savedScore:  0
}

let score = getsavedScore()


p100 = document.getElementById('p100'),
p50 = document.getElementById('p50'),
m100 = document.getElementById('m100'),
m50 = document.getElementById('m50'),
cals = document.getElementById('cals');
console.log(score)



const renderScore = function () {
    cals.textContent = score
}
renderScore() 

p100.addEventListener('click', () => {
   localStorage.setItem("score",score+= 100)
   renderScore() 
});

p50.addEventListener('click', () => {
  
    localStorage.setItem("score",score += 50)
    renderScore() 
});

m100.addEventListener('click', () => {
   
    localStorage.setItem("score",score -= 100)
    renderScore() 
});

m50.addEventListener('click', () => {
   
    localStorage.setItem("score",score-= 50)
    renderScore() 
});


// const show = () => {
//     if (cals > 300) {
//         let obese = document.getElementById("sumo");
//                 for (let stuff of obese) {
//                     stuff.style.display = "block";
//                 }
//     }
// }

// const show = () => {
//     if (score > 300) {
//         let obese = document.getElementById("sumo");
             
//         obese.style.display = "block";
                
//     }
// }

// show();

// function show() {
//     if (score > 300) {
//         let obese = document.getElementById("sumo");
//         obese.style.display = "block";
//     }
// }

// show()