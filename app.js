
const understoodButton = document.getElementById("button")
const croosButton = document.getElementById("crossButton")
const elementContainer = document.getElementById("container")


understoodButton.addEventListener("click", remove)
croosButton.addEventListener("click", disappear)

function disappear() {
    elementContainer.style.display = "none"
}

function remove() {
    elementContainer.style.display = "none"
    localStorage.setItem("state", "none");
}

const state = localStorage.getItem("state")
elementContainer.style.display = state;


