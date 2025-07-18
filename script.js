
function spin() {
    let mode = localStorage.getItem("spinMode") || "RANDOM";
    const result = document.getElementById("result");
    let outcome = Math.random() > 0.5 ? "WIN" : "LOSE";
    if (mode === "WIN") outcome = "WIN";
    else if (mode === "LOSE") outcome = "LOSE";

    new Audio('sounds/spin.mp3').play();

    setTimeout(() => {
        result.innerText = "Result: " + outcome;
        if (outcome === "WIN") {
            new Audio('sounds/break.mp3').play();
        }
    }, 500);
}
