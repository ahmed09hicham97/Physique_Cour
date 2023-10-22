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
let appareil = prompt("Quel Appareil utiliser vous ?");
if(appareil==="telephone" || appareil==="tablette"){
  alert("Veuillez retourner Votre pour une meilleure experience")
} else if(appareil==="pc" || appareil==="PC"){
  alert("vous pouvez emetre des sons en clicant sur les touches suivante :'w,s,a'.")
} else{
  alert("Il n'y a aucun appareil appellé "+appareil)
  alert("veuillez actualiser la page et donner le nom d'un appareil concret 🗘.")
}