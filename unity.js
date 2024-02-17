function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setbackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}


function getARandomeAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const random = Math.round(randomNumber);
    
    const alphabet = alphabets[random];
    return alphabet;
}