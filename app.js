// * editeur creer const selectionner zone 

const editeur1 = document.querySelector("#editeur1")
const editeur2 = document.querySelector("#editeur2")


//*ecoute les touches claviers addevent listener avec keyup et cree const taper pour renvoyer a l'editeur2

editeur1.addEventListener("keyup", () => {

    const taper = document.querySelector("#editeur1").value;
    editeur2.value = taper;

});


//*mon logo infini a s'afficher quand on passe sur zone (eventlistener "mouseover")et 
//*et quand on sort de zone (eventlistener mouse out).

const icon = document.querySelector("#icon")

editeur1.addEventListener("mouseover", () => {

    icon.style.visibility = "visible";
});
editeur1.addEventListener("mouseout", () => {

    icon.style.visibility = "hidden";
});

// ** ecriture gras et italique  un click souris gras et double click reviens a la normal.selectionne une class querySelector

boldButton.addEventListener("click", () => {
    const boldButton = document.querySelector("#boldButton");
    editeur1.style.fontWeight = "bold";
    editeur2.style.fontWeight = "bold";
});
boldButton.addEventListener("dblclick", () => {
    const boldButton = document.querySelector("#boldButton");
    editeur1.style.fontWeight = "normal";
    editeur2.style.fontWeight = "normal";

});
italicButton.addEventListener("click", () => {
    const italicButton = document.querySelector("#italicButton");
    editeur1.style.fontStyle = "italic";
    editeur2.style.fontStyle = "italic";
});
italicButton.addEventListener("dblclick", () => {
    const italicButton = document.querySelector("#italicButton");
    editeur1.style.fontStyle = "normal";
    editeur2.style.fontStyle = "normal";
});

// **compteur cara aller chercher le document html par id, ensuite  ecouter l'appui des touches avec addeventlistener.
//* appeler la fonction
//*vais chercher le doc a changer donc le compteur 'la div) utilise innerhtml pour changer.

document.getElementById("editeur1").addEventListener("keyup", function() {
    document.getElementById("compteur").innerHTML = 200 - editeur1.value.length;
})

//*barre progression

//*document.getElementById("editeur1").addEventListener("keyup", function(){
//*    document.getElementsByClassName("emptybar").inne

document.getElementById("editeur1").addEventListener("keyup", function() {
    document.getElementById("emptybar").style.width = editeur1.value.length / 2 + "%";
});