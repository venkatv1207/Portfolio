// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = [
'Front-end Developer  ',
'Software Developer  ',
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
    typingAnimationElement.textContent += text[i];
    }, i * 200); // Increase the delay to slow down the typing animation
}

// Once the animation is complete, reset the text and start over
setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);

function mail(){
    document.getElementById("b1").innerHTML="venkatvadlakonda960@gmail.com"
}
function phone(){
    document.getElementById("b2").innerHTML="+91 9390443840"
}
function email(){
    document.getElementById("i1").innerHTML="venkatvadlakonda960@gmail.com"
}
function mobile(){
    document.getElementById("i2").innerHTML="+91 9390443840"
}