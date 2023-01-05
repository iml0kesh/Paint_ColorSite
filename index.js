
// Variables for each CARD

var cardBlue = document.getElementById("colorBlue");
var cardRed = document.getElementById("colorRed");
var cardYellow = document.getElementById("colorYellow");
var cardGreen = document.getElementById("colorGreen");
var cardDrak = document.getElementById("colorDark");
var cardWhite = document.getElementById("colorWhite");
var cardOrange = document.getElementById("colorOrange");
var cardPink = document.getElementById("colorPink");
var cardGray = document.getElementById("colorGray");

var color = "#ff0000d";


// color variable
// const randColor = () =>  {
//     return  "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }



// color = randColor();

cardBlue.addEventListener('click',function onClick() {
    color = "blue";
});
cardRed.addEventListener('click',function onClick() {
    color = "Red";
});
cardYellow.addEventListener('click',function onClick() {
    color = "Yellow";
});
cardGreen.addEventListener('click',function onClick() {
    color = "#00FF00";
});
cardDrak.addEventListener('click',function onClick() {
    color = "black";
});
cardWhite.addEventListener('click',function onClick() {
    color = "white";
});
cardOrange.addEventListener('click',function onClick() {
    color = "orange";
});
cardPink.addEventListener('click',function onClick() {
    color = "pink";
});
cardGray.addEventListener('click',function onClick() {
    color = "gray";
});


// CARDS 

const card1 = document.getElementById("card1");
card1.addEventListener('click', function onClick() {
    card1.style.backgroundColor = color ;
});

const card2 = document.getElementById("card2");
card2.addEventListener('click', function onClick() {
    card2.style.backgroundColor = color ;
});

const card3 = document.getElementById("card3");
card3.addEventListener('click', function onClick() {
    card3.style.backgroundColor = color ;
});

const card4 = document.getElementById("card4");
card4.addEventListener('click', function onClick() {
    card4.style.backgroundColor = color ;
});

const card5 = document.getElementById("card5");
card5.addEventListener('click', function onClick() {
    card5.style.backgroundColor = color ;
});

const card6 = document.getElementById("card6");
card6.addEventListener('click', function onClick() {
    card6.style.backgroundColor = color ;
});

const card7 = document.getElementById("card7");
card7.addEventListener('click', function onClick() {
    card7.style.backgroundColor = color ;
});

const card8 = document.getElementById("card8");
card8.addEventListener('click', function onClick() {
    card8.style.backgroundColor = color ;
});

const card9 = document.getElementById("card9");
card9.addEventListener('click', function onClick() {
    card9.style.backgroundColor = color ;
});

const card10 = document.getElementById("card10");
card10.addEventListener('click', function onClick() {
    card10.style.backgroundColor = color ;
});

const card11 = document.getElementById("card11");
card11.addEventListener('click', function onClick() {
    card11.style.backgroundColor = color ;
});

const card12 = document.getElementById("card12");
card12.addEventListener('click', function onClick() {
    card12.style.backgroundColor = color ;
});

const card13 = document.getElementById("card13");
card13.addEventListener('click', function onClick() {
    card13.style.backgroundColor = color ;
});

const card14 = document.getElementById("card14");
card14.addEventListener('click', function onClick() {
    card14.style.backgroundColor = color ;
});

const card15 = document.getElementById("card15");
card15.addEventListener('click', function onClick() {
    card15.style.backgroundColor = color ;
});

const card16 = document.getElementById("card16");
card16.addEventListener('click', function onClick() {
    card16.style.backgroundColor = color ;
});

const card17 = document.getElementById("card17");
card17.addEventListener('click', function onClick() {
    card17.style.backgroundColor = color ;
});

const card18 = document.getElementById("card18");
card18.addEventListener('click', function onClick() {
    card18.style.backgroundColor = color ;
});

const card19 = document.getElementById("card19");
card19.addEventListener('click', function onClick() {
    card19.style.backgroundColor = color ;
});

const card20 = document.getElementById("card20");
card20.addEventListener('click', function onClick() {
    card20.style.backgroundColor = color ;
});

const card21 = document.getElementById("card21");
card21.addEventListener('click', function onClick() {
    card21.style.backgroundColor = color ;
});

const card22 = document.getElementById("card22");
card22.addEventListener('click', function onClick() {
    card22.style.backgroundColor = color ;
});

const card23 = document.getElementById("card23");
card23.addEventListener('click', function onClick() {
    card23.style.backgroundColor = color ;
});

const card24 = document.getElementById("card24");
card24.addEventListener('click', function onClick() {
    card24.style.backgroundColor = color ;
});

const card25 = document.getElementById("card25");
card25.addEventListener('click', function onClick() {
    card25.style.backgroundColor = color ;
});

const card26 = document.getElementById("card26");
card26.addEventListener('click', function onClick() {
    card26.style.backgroundColor = color ;
});

const card27 = document.getElementById("card27");
card27.addEventListener('click', function onClick() {
    card27.style.backgroundColor = color ;
});

const card28 = document.getElementById("card28");
card28.addEventListener('click', function onClick() {
    card28.style.backgroundColor = color ;
});

const card29 = document.getElementById("card29");
card29.addEventListener('click', function onClick() {
    card29.style.backgroundColor = color ;
});

const card30 = document.getElementById("card30");
card30.addEventListener('click', function onClick() {
    card30.style.backgroundColor = color ;
});

const card31 = document.getElementById("card31");
card31.addEventListener('click', function onClick() {
    card31.style.backgroundColor = color ;
});

const card32 = document.getElementById("card32");
card32.addEventListener('click', function onClick() {
    card32.style.backgroundColor = color ;
});

const card33 = document.getElementById("card33");
card33.addEventListener('click', function onClick() {
    card33.style.backgroundColor = color ;
});

const card34 = document.getElementById("card34");
card34.addEventListener('click', function onClick() {
    card34.style.backgroundColor = color ;
});

const card35 = document.getElementById("card35");
card35.addEventListener('click', function onClick() {
    card35.style.backgroundColor = color ;
});

const card36 = document.getElementById("card36");
card36.addEventListener('click', function onClick() {
    card36.style.backgroundColor = color ;
});


function reset(){
    window.location.reload(true);
}

function GenerateColor(){
    return  "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function multiColor(){
    card1.style.backgroundColor = GenerateColor();
    card2.style.backgroundColor = GenerateColor();
    card3.style.backgroundColor = GenerateColor();
    card4.style.backgroundColor = GenerateColor();
    card5.style.backgroundColor = GenerateColor();
    card6.style.backgroundColor = GenerateColor();
    card7.style.backgroundColor = GenerateColor();
    card8.style.backgroundColor = GenerateColor();
    card9.style.backgroundColor = GenerateColor();
    card10.style.backgroundColor = GenerateColor();
    card11.style.backgroundColor = GenerateColor();
    card12.style.backgroundColor = GenerateColor();
    card13.style.backgroundColor = GenerateColor();
    card14.style.backgroundColor = GenerateColor();
    card15.style.backgroundColor = GenerateColor();
    card16.style.backgroundColor = GenerateColor();
    card17.style.backgroundColor = GenerateColor();
    card18.style.backgroundColor = GenerateColor();
    card19.style.backgroundColor = GenerateColor();
    card20.style.backgroundColor = GenerateColor();
    card21.style.backgroundColor = GenerateColor();
    card22.style.backgroundColor = GenerateColor();
    card23.style.backgroundColor = GenerateColor();
    card24.style.backgroundColor = GenerateColor();
    card25.style.backgroundColor = GenerateColor(); 
    card26.style.backgroundColor = GenerateColor(); 
    card27.style.backgroundColor = GenerateColor();
    card28.style.backgroundColor = GenerateColor();
    card29.style.backgroundColor = GenerateColor();
    card30.style.backgroundColor = GenerateColor();
    card31.style.backgroundColor = GenerateColor();
    card32.style.backgroundColor = GenerateColor();
    card33.style.backgroundColor = GenerateColor();
    card34.style.backgroundColor = GenerateColor();
    card35.style.backgroundColor = GenerateColor();
    card36.style.backgroundColor = GenerateColor();
}



// CODE for Guesscolor file 

const colorBox = document.getElementById("colorBox");

function GerenateSpecificColor() {
    let red = "red";
    var yellow = "yellow";
    return console.log(Math.random(red,yellow))
}