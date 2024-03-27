const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll("aba.conteudo");

for (let i = 0; i <botoes.length; i ++) {
    botoes[i].onclik = function () {

        for (let j = 0; j <botoes.length; j++)
        botoes{i}.classList.add("ativo");
        textos{i}.classList.add("ativo");
    }

    botoes{i}.classList.add("ativo");
    textos{i}.classList.add("ativo");
  }
} 

const contadores = document.querySelectorAll("contador");
const tempoObjeivo1 = new Date("2023-10-05T00:00:00");
const tempoObjeivo2 = new Date("2023-12-05T00:00:00");
const tempoObjeivo3 = new Date("2023-12-30T00:00:00");
const tempoObjeivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjeivo1,tempoObjeivo2,tempoObjeivo3,tempoObjeivo4];


function calculaTempo(tempoObjeivo) {
    let tempoAtual = new date ();
    let tempoFinal = tempoObjeivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    }
}