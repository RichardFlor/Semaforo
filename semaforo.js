"use strict"

var tracker = null
var contador = null

let estado = (comparacao) => document.querySelector("img").src
.toLowerCase().endsWith(comparacao.toLowerCase() + ".png")

function ligar(arquivo){
    if(arquivo === "")
        throw 0;
    else 
        contador = arquivo;
    
    return document.querySelector("img").src = "img/" + arquivo + ".png" 
}

function paraLoop(){
    if(tracker != null){
        clearInterval(tracker)
        tracker = null
    }
}
function escolhido(evento, arquivo){
    paraLoop()
    ligar(arquivo)
}
function loop(){
    if(tracker == null){
        tracker = setInterval( () => {
            switch(contador){
                case "vermelho":
                    ligar("amarelo")
                    break;
                case "amarelo":
                    ligar("verde")
                    break;
                case "verde":
                    ligar("vermelho")
                    break;
                default:
                    ligar(["amarelo", "verde", "vermelho"][ (Math.random() * 2).toFixed(0)])
            }
            
        }, 1000)
    }
    else
        paraLoop()
}
document.getElementById("vermelho").addEventListener("click", (event, ) => escolhido(event, "vermelho"))
document.getElementById("amarelo").addEventListener("click", (event, ) => escolhido(event, "amarelo"))
document.getElementById("verde").addEventListener("click", (event, ) => escolhido(event, "verde"))
document.getElementById("auto").addEventListener("click", loop)
