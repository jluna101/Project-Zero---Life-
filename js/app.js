// Variables 
let time = 500000000;
let round = 1;
let name = prompt('Give your Earth a nickname!');
let oxygenLevel = 10;
let waterLevel = 10;
let sunlightLevel = 10;
/* === Functions === */
// Below sets the game up by remove the landing page html, displaying the nickname input, and begins the time. 
const setUpGame = () => {
    $('#initial-alert').hide();
    $('#welcome-nickname').text(name);
    $('#begin-game').css('opacity', 0);
}
// The below function invokes specific gif as the rounds increased, turns off the event listeners, timer, and also displays 'you won' when round 5 is reached
const setUpNewRound = () => {
    if (round === 2){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314648-42cabec9-59ed-41fb-903b-794f8357d0f3.gif");
    } else if (round === 3){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314774-13fcad42-3af5-4974-a935-6891ad034b1d.gif");
    } else if (round === 4){
        $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153314854-42742347-8ee9-43d8-b5b6-70aa8feb45bb.gif");
    } else if (round === 5){
        $('#initial-alert').show();
        $('#initial-alert').text('YOU WON!');
        $('#initial-alert').css('font-size', 70);
        $('#btn-oxygen').off('click');
        $('#btn-water').off('click');
        $('#btn-sun').off('click');
        clearInterval(timer);
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
/* === Event Listeners === */
// Below is an event listener for the button 'begin-game' which initiates the game. This is done by beginning the timer, decreasing the oxygenLevel, waterLevel, and sunlightLevel. The gameOver function is also included in this. 
$('#begin-game').on('click', () => {
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
           setUpNewRound();
           clearInterval(timer);
           clearInterval(sunlightDecrease);
           clearInterval(waterDecrease);
           clearInterval(oxygenDecrease);
        }  else if (oxygenLevel === 0 || waterLevel === 0 || sunlightLevel === 0){
             gameOver();
        }}, 100);
    const oxygenDecrease = setInterval(() => {
            oxygenLevel--;
            $('#oxygen').attr('value', oxygenLevel)
            if (oxygenLevel === 0){
                clearInterval(oxygenDecrease);
            }
        }, 1000);
    const waterDecrease = setInterval(() => {
            waterLevel--;
            $('#water').attr('value', waterLevel)
            if (waterLevel === 0){
                clearInterval(waterDecrease);
            }
        }, 1000);
    const sunlightDecrease = setInterval(() => {
            sunlightLevel--;
            $('#sun').attr('value', sunlightLevel)
            if (sunlightLevel === 0){
                clearInterval(sunlightDecrease);
            }
        },1000);
    const gameOver = () => {
            $('#btn-oxygen').off('click');
            $('#btn-water').off('click');
            $('#btn-sun').off('click');
            $('#initial-alert').show();
            $('#initial-alert').text('GAME OVER');
            $('#initial-alert').css('font-size', 70);
            clearInterval(timer);
            clearInterval(waterDecrease);
            clearInterval(oxygenDecrease);
            clearInterval(sunlightDecrease);
            $('#earth').attr("src","https://user-images.githubusercontent.com/97872070/153334497-cb7e076c-7610-4369-8944-f21ddc5af27b.gif");
        }
    });
    
// Below are the event listeners for the oxygen, water, and sunlight button. Each will increase value by one when clicked with a max value of 10. 
$('#btn-oxygen').on('click', () => {
    oxygenLevel++;
    $('#oxygen').attr('value', oxygenLevel)
    $('#btn-oxygen').animate({opacity: '0%'},{duration: 10, complete: function(){
        $('#btn-oxygen').animate({opacity: '100%'}, 10);
    }})
    if (oxygenLevel > 10){
        oxygenLevel = 10;
    }
});
$('#btn-water').on('click', () => {
    waterLevel++;
    $('#water').attr('value', waterLevel)
    $('#btn-water').animate({opacity: '0%'},{duration: 10, complete: function(){
        $('#btn-water').animate({opacity: '100%'}, 10);
    }})
    if (waterLevel > 10){
        waterLevel = 10;
    }
});
$('#btn-sun').on('click', () => {
    sunlightLevel++;
    $('#sun').attr('value', sunlightLevel)
    $('#btn-sun').animate({opacity: '0%'},{duration: 10, complete: function(){
        $('#btn-sun').animate({opacity: '100%'}, 10);
    }})
    if (sunlightLevel > 10){
        sunlightLevel = 10;
    }
});





// $("#btn-oxygen").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);