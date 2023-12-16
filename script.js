const dynamicText = document.querySelector("h1 span");
const words = ["Love", "like Art", "the Future", "Everything"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, ++charIndex);

  dynamicText.textContent = currentChar;
  dynamicText.classList.toggle("stop-blinking", !charIndex);

  if ((!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0)) {
    isDeleting = !isDeleting;
    wordIndex = (isDeleting ? wordIndex : (wordIndex + 1)) % words.length;
    setTimeout(typeEffect, isDeleting ? 1200 : 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 200);
  }
};

typeEffect();
