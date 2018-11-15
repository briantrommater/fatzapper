let score = 0,
p100 = document.getElementById('p100'),
p50 = document.getElementById('p50'),
m100 = document.getElementById('m100'),
m50 = document.getElementById('m50'),
cals = document.getElementById('cals');


p100.addEventListener('click', () => {
    score += 100;
    cals.innerHTML = score;
});

p50.addEventListener('click', () => {
    score += 50;
    cals.innerHTML = score;
});

m100.addEventListener('click', () => {
    score -= 100;
    cals.innerHTML = score;
});

m50.addEventListener('click', () => {
    score -= 50;
    cals.innerHTML = score;
});




