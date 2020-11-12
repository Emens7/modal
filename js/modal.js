
const modal = document.getElementById("myModal");

const btn = document.getElementById("button");

const span = document.getElementsByClassName("close")[0];

const redButton = document.getElementsByClassName("modal-button-red")[0];

const greenButton = document.getElementsByClassName("modal-button-green");

btn.onclick = () => {
  modal.style.display = "block";
}

greenButton.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
  modal.style.display = "none";
}

redButton.onclick = () => {
    modal.style.display="none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}