let score = 0;

$('#p100').click(function() {
    score += 100;
    $('#score').html(score);
});

$('#p50').click(function() {
    score += 50;
    $('#score').html(score);
});

$('#m100').click(function() {
    score -= 100;
    $('#score').html(score);
});

$('#m50').click(function() {
    score -= 50;
    $('#score').html(score);
});

