// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-screen');
//     playSection.classList.remove('hidden');
// }

// function hideElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

function continueGame () {
    const alphabet = getARandomeAlphabet();
    console.log('Your random alphabet is :',alphabet);

    const currentAlphanetElement = document.getElementById('current-alphabet');
    currentAlphanetElement.innerText= alphabet

    setbackgroundColorById (alphabet)
}

function play() {
    hideElementById('home-screen');
    showElementById('play-screen');
    continueGame();
}