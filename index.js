"use strict"

const DIM = 4;

window.onload = function () {
   settaCampo()
   generaNmeroInCampo()
   document.addEventListener("keydown", gestisciTasto);
}

function settaCampo() {
   const wrapper = document.getElementById("wrapper")
   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM; j++) {
         let div = document.createElement("div")
         div.classList.add("cella")
         div.id = `div-${i}-${j}`
         wrapper.appendChild(div)
      }
   }

}

function generaNmeroInCampo() {
   let div=document.getElementById(`div-${0}-${0}`)
   do{
      let i=generaNumero(0,4)
      let j=generaNumero(0,4)
      div=document.getElementById(`div-${i}-${j}`)
   }while(div.innerText!="")
   div.innerText="2"
}

function gestisciTasto(event) {
   switch (event.key) {
      case "ArrowUp":
         elementiSu()
         generaNmeroInCampo()
         break;
      case "ArrowDown":
         alert("Hai premuto giù ↓");
         generaNmeroInCampo()
         break;
      case "ArrowLeft":
         alert("Hai premuto sinistra ←");
         generaNmeroInCampo()
         break;
      case "ArrowRight":
         alert("Hai premuto destra →");
         generaNmeroInCampo()
         break;
   }
}

function elementiSu(){
   let cont=0
   for (let i = 0; i < DIM; i++){
      for (let j = 0; j < DIM-1; j++){
         let divSopra=document.getElementById(`div-${i}-${j}`)
         let divSotto=document.getElementById(`div-${i+1}-${j}`)
         if(divSopra.innerText==divSotto.innerText){
            let numero=parseInt(divSopra.innerText)*2
            let div=document.getElementById(`div-${cont}-${j}`)
            div.innerText=`${numero}`
            cont++
         }


      }
   }

}












function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}