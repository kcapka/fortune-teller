const getComAnswer = () => {
    let randomNum = Math.floor(Math.random()*8);
    if (randomNum === 0) {
        return 'Most likely';
    } else if (randomNum === 1) {
        return 'Definitely';
    } else if (randomNum === 2) {
        return 'My sources say no';
    } else if (randomNum === 3) {
        return 'You may rely on it';
    } else if (randomNum === 4) {
        return "No, I don't think so";
    } else if (randomNum === 5) {
        return "Perhaps";
    } else if (randomNum === 6) {
        return "Not very likely, I'm afraid";
    } else {
        return "Not going to happen";
    }
}

let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");

submit.addEventListener("click", () => {
    document.getElementById("answer").innerHTML = getComAnswer();
    submit.classList.toggle("active");
    reset.classList.toggle("active");
});

reset.addEventListener("click", () => {
    document.getElementById("answer").innerHTML = 'Answer will appear here';
    submit.classList.remove("active");
    reset.classList.remove("active");
})