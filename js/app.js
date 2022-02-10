// Variables 

let time = 500000000;
let round = 1;
let nickname = prompt('Welcome! To begin enter a nickname for your Earth');
let oxygenLevel = 11;
let waterLevel = 11;
let sunlightLevel = 11;


/* === Methods === */

// Created functions which decrease the health of the elemeny by 1 every second 

const oxygenDecrease = setInterval(() => {
    oxygenLevel--;
    $('#oxygen').attr('value', oxygenLevel)
    if (oxygenLevel === 0){
        clearInterval(oxygenDecrease);
    }
    console.log('DECREASED oxygen to ' + oxygenLevel);
}, 1000);
const waterDecrease = setInterval(() => {
    waterLevel--;
    $('#water').attr('value', waterLevel)
    if (waterLevel === 0){
        clearInterval(waterDecrease);
    }
    console.log('DECREASED water to ' + waterLevel);
}, 1000);
const sunlightDecrease = setInterval(() => {
    sunlightLevel--;
    $('#sun').attr('value', sunlightLevel)
    if (sunlightLevel === 0){
        clearInterval(sunlightDecrease);
    }
    console.log('DECREASED sunlight to ' + sunlightLevel);
}, 1000);

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
    } else if (round === 5){
        console.log('you won! Congrats')
        $('#btn-oxygen').off('click');
        $('#btn-water').off('click');
        $('#btn-sun').off('click');
        clearInterval(waterDecrease);
        clearInterval(oxygenDecrease);
        clearInterval(sunlightDecrease);
        clearInterval(timer);
    }
}


const gameOver = () => {
        $('#btn-oxygen').off('click');
        $('#btn-water').off('click');
        $('#btn-sun').off('click');
        clearInterval(timer);
        clearInterval(waterDecrease);
        clearInterval(oxygenDecrease);
        clearInterval(sunlightDecrease);
        console.log("game over");
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153334497-cb7e076c-7610-4369-8944-f21ddc5af27b.gif");
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

/* === Health Element Bar ==*/














/* === Button Event Listeners === */

// Timer begins when 'begin game' button is selected and timer stops when time = 4540000000
$('#begin-game').on('click', () => {
    console.log("Begin Game Clicked");
    setUpGame();
    timer = setInterval(function () {
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
           console.log(round);
           setUpNewRound();
           clearInterval(timer);
           console.log("timer stopped")
        }  else if (oxygenLevel === 0 || waterLevel === 0 || sunlightLevel === 0){
             gameOver();
        }}, 1000);
    });



$('#btn-oxygen').on('click', () => {
    oxygenLevel++;
    $('#oxygen').attr('value', oxygenLevel)
    if (oxygenLevel > 10){
        oxygenLevel = 10;
    }
    console.log('INCREASED water to ' + oxygenLevel);
});

$('#btn-water').on('click', () => {
    waterLevel++;
    $('#water').attr('value', waterLevel)
    if (waterLevel > 10){
        waterLevel = 10;
    }
    console.log('INREASED water to ' + waterLevel);
});

$('#btn-sun').on('click', () => {
    console.log("Sun Clicked");
    sunlightLevel++;
    $('#sun').attr('value', sunlightLevel)
    if (sunlightLevel > 10){
        sunlightLevel = 10;
    }
    console.log('INCREASED water to ' + sunlightLevel);
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





/* const timer = () => {
    time+=10000000;
    $('#year').text('Age: ' + commafy(time) + ' Years');
    // let timerInterval = setInterval(timer, 1000);
    // timerInterval;
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
       clearInterval(timerInterval);
       console.log("timer stopped")
    // } else if (time > 4540000000) {
       // $('#year').text('Age: 4,540,000,000 Years');
    }};
let timerInterval = setInterval();


$('#begin-game').on('click', () => {
    console.log("Begin Game Clicked");
    setUpGame();

    // timerInterval;
});

*/