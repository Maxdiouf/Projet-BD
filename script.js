//Fonction animation onomatopé
console.log('go')
function clignotement(){ 
    if (document.getElementById("onoo2").style.display=="block"){
        document.getElementById("onoo2").style.display="none";
    } else {
        document.getElementById("onoo2").style.display="block"; } 

     
}
// mise en place de l appel régulier de la fonction toutes les 1.2 secondes 
setInterval("clignotement()", 1000);
//dans la balise body on appelle le fichier script1.js pour lui assigner : <onload="script1.js">car ma page javascript est nommé test

function changementImage(sourceImage) {
    document.getElementById('livre1').src = sourceImage
    //document.getElementByid('livre1').style.height= 300 +"px";

}
function changementImagesss(sourceImage) {
    document.getElementById('livre1').src = sourceImage
    //document.getElementByid('livre1').style.height= 100 +"px";
    console.log('test')
    
}