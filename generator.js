
const number = document.querySelector(".number");
const btn = document.querySelector(".generate");


const generateRandomNumber = () => {
    // generate random numbers from 1 to 100 //

    const randomNumber = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = randomNumber;
}
btn.addEventListener("click", generateRandomNumber);

// to generate a random number when the page loads call the function

generateRandomNumber();
