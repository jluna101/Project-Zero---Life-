// Variables 

let time = 500000000;
let round = 1;
let nickname = prompt('Welcome! To begin enter a nickname for your Earth');
let oxygenLevel = 5;
let waterLevel = 5;
let sunlightLevel = 5;

let num = 100000;

/* === Functions === */


// Below sets the game up by remove the landing page html, displaying the nickname input, and begins the time. 
const setUpGame = () => {
    // $('#year').text('Year: ' + time + ' million');
    $('#initial-alert').remove();
    $('#welcome-nickname').text(nickname).toUpperCase;
    $('#begin-game').remove();
    // timer(); - TIMER NOT WORKING YET 
}
// Below invokes additional rounds (total 4 rounds) by changing the gif 
const setUpNewRound = () => {
    if (round === 2){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314648-42cabec9-59ed-41fb-903b-794f8357d0f3.gif");
        console.log(round);
    } else if (round === 3){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314774-13fcad42-3af5-4974-a935-6891ad034b1d.gif");
        console.log(round);
    } else if (round === 4){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314854-42742347-8ee9-43d8-b5b6-70aa8feb45bb.gif");
        console.log(round);
    }
}

// The below Commafy() function came from stackoverflow, with only minor changes made by Jesse (me): https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
// Credits to user Ghostoy
 
    function commafy( num ) {
        let str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

// Below is the timer with if statements to invoke the setUpNewRound at specific values for time
const timer = () => {
    time+=10000000;
    $('#year').text('Age: ' + commafy(time) + ' Years');
    

    if (time === 1500000000){
        round++;
        setUpNewRound();
    } else if (time === 2500000000){
        round++;
        setUpNewRound();
    } else if (time === 3500000000){
        round++;
        setUpNewRound();
    } else if (time === 4540000000){
       round++;
       setUpNewRound();
    } else if (time > 4540000000) {
        $('#year').text('Age: 4,540,000,000 Years');
        
    }};

    const oxygenDecrease = setInterval(() => {
        oxygenLevel--;
        console.log('oxygen is ' + oxygenLevel);
    }, 1000);

    



/* === Button Event Listeners === */

// let timeWithCommas = commafy(time);

$('#begin-game').on('click', () => {
    console.log("Begin Game Clicked");
    timer();
    setUpGame();
    setInterval(timer, 10);
});

$('#btn-oxygen').on('click', () => {
    console.log("Oxygen Clicked");
    oxygenLevel++;
    console.log(oxygenLevel);
});

$('#btn-water').on('click', () => {
    console.log("Water Clicked");
    waterLevel++;
    console.log(waterLevel);
});

$('#btn-sun').on('click', () => {
    console.log("Sun Clicked");
    sunlightLevel++;
    console.log(sunlightLevel);
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