function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playSection = document.getElementById('play-screen');
    playSection.classList.remove('hidden');
}

// function hideElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }