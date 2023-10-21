let yourName = prompt("quel est ton nom ?");
if(yourName==="Zaineb" || yourName==="zaineb"){
  alert("Bonjour Madame Zaineb Elmontassir")
  alert("Si vous Renconter un probléme n'hésitez pas a en faire pare au Devloppeures du site")
} else if(yourName==="ahmed outmaghoust" ||yourName==="abd elmoughit elhatab"){
    alert("bien venu dans votre site chér "+yourName)
    alert("Merci de m' avoir créer Monsieur "+yourName)
}
else{
    alert("Bien venu "+yourName+" sur le site de la Prof Zaineb Elmountassir ");
}
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", audio);
}

function audio() {
  const buttonClicked = this.innerHTML;
  makeSounds(buttonClicked);
  buttonAnimation(buttonClicked);
}

document.addEventListener("keydown", function (event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
});

function makeSounds(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/sabilDouaa.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  const activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 150);
}
