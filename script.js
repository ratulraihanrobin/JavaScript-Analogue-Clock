setInterval(setClock, 1000);

const hourHand = document.querySelector('.hour');
const miniteHand = document.querySelector('.minite');
const secondHand = document.querySelector('.second');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minitesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minitesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(miniteHand, minitesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}
