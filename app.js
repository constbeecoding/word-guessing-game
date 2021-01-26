// VARIABLES//

let qwerty = document.querySelectorAll('#qwerty button');
let phrase = document.getElementById('phrase');
let buttonReset = document.querySelector('.btn__reset');
let startOverlay = document.getElementById('overlay');
let btn = document.getElementById('qwerty').querySelectorAll('button');

let missed = 0;

//PHRASES ARRAY//

const phrases = [
    'ID JUST AS SOON KISS A WOOKIE',
    'HELP ME OBI WAN KENOBI',
    'MAY THE FORCE BE WITH YOU',
    'I FIND YOUR LACK OF FAITH DISTURBING',
    'SCRUFFY LOOKING NERF HERDER'
];




//START GAME -- BUTTON FUNCTION//

buttonReset.addEventListener('click', () => {
    startOverlay.style.display = "none";
});

//RETURN RANDOM PHRASE FROM ARRAY//

const getRandomPhraseAsArray = arr => {
    let i = Math.floor(Math.random() * arr.length); //random array is returned.
    return arr[i].split(''); //each letter and space in array is "split"
    
} 

getRandomPhraseAsArray(phrases);


//ADD THE LETTERS OF A STRING TO THE DISPLAY//

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("LI");
        let ul = document.querySelector('ul');
        

        li.textContent = arr[i];
        ul.appendChild(li);
        
        if (arr[i] != ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }  
    }
};
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);


// //CHECK IF A LETTER IS IN THE PHRASE//

function checkLetter(btn) {
    const allLetters = document.getElementsByClassName('letter'); //every letter in a phrase
    
    let match = null; 

    for (let i = 0; i < allLetters.length; i++) {
            
        if (btn.textContent === allLetters[i].textContent) {
            allLetters[i].classList.add('show');
            //if match, store button text in match variable
            match = allLetters[i].textContent;
        } 
    } 
    return match;
};


//LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//
for (let i=0; i < qwerty.length; i++) {

    qwerty[i].addEventListener('click', e => {
        let btn = e.target;
        btn.classList.add('chosen');
        
        if (btn.classList.contains('chosen')) {
            btn.disabled = true;
        }

        
        const letterFound = checkLetter(btn);


        // CHECK IF LETTER IS INCORRECT - CHANGE IMG
        if (!letterFound) {
            
            const firstLiveStar = document.querySelector(".tries img[src='images/liveStar.png']")
            firstLiveStar.setAttribute("src", "images/lostStar.png")
            missed +=1;
        } 
    })
}
// CHECK IF THE GAME HAS BEEN WON OR LOST//

function checkWin() {

    const classLetter = document.getElementsByClassName('letter');
    const classShow =  document.getElementsByClassName('show');

    if (classLetter.length === classShow.length) {
    //add WIN statements
            startOverlay.classList.add('win');
            //add headline text to show person won
            startOverlay.innerHTML = "The force is strong with you!";
            //change display property of overlay to flex
            startOverlay.style.display = ('flex'); 
            //change display property of overlay to flex
    } else if (missed >= 5) {
    //add LOSE Statements
            startOverlay.classList.add('lose');
            //add headline text to show person lost
            startOverlay.innerHTML = "Patience you must have my young Padawan...";
            //change display property of overlay to flex
            startOverlay.style.display = ('flex'); 
            //change display property of overlay to flex
        }
    
};



//LISTEN FOR THE START GAME BUTTON TO BE PRESSED//

// startButton.addEventListener('click', () => {



// });