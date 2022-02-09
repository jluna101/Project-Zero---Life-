// Variables 

let time = 0;
let nickname = prompt('Welcome! To begin enter a nickname for your Earth');
setInterval(time, 10000);



/* === Test Functions === */



/* === Functions === */


// Below sets the game up by remove the landing page html, displaying the nickname input, and begins the time. 
const setUpGame = () => {
    // $('#year').text('Year: ' + time + ' million');
    $('#initial-alert').remove();
    $('#welcome-nickname').text(nickname);
    $('#begin-game').remove();
    // timer(); - TIMER NOT WORKING YET 
}

/* Timer Function - In progress 
const timer = () => {
    time++;
    $('#year').text('Year: ' + time + ' million');
    if (time === 0) {
        time++;
    }
    
}




/* === Button Event Listeners === */

$('#begin-game').on('click', () => {
    console.log("Begin Game Clicked");
    setUpGame();
});

$('#btn-oxygen').on('click', () => {
    console.log("Oxygen Clicked");
});

$('#btn-water').on('click', () => {
    console.log("Water Clicked");
});

$('#btn-sun').on('click', () => {
    console.log("Sun Clicked");
});


























/* === Don't Need - Maybe === */
/*
$('#metrics-oxygen').on('click', () => {
    console.log("Oxygen Level Clicked");
});

$('#metrics-water').on('click', () => {
    console.log("Water Level Clicked");
});

$('#metrics-sun').on('click', () => {
    console.log("Sun Level Clicked");
});
*/