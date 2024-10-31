//forza horizon 5
//call of duty 
//fc 25
//the crew motorfest
//gta 5
//gta san andreas
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("gosta de jogos de corrida?");
  campoAventura = createCheckbox("Gosta de jogos de futebol e mundo aberto?");
}
function draw() {
  background("#65A5C4");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(015));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDejogosdecorrida, gostaDejogosdefutebol) {
  if (idade >= 13) {
    if (idade >= 15) {
      return "fc25";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDejogosdemundoaberto) {
          return "cal of duty";          
        } else{
         return "gta 5";
        }
      } else {
        if (gostaDejogosdemundoaberto) {
          return "gta san andreas";
        } else {
          return "gta5";
        }
      }
    }
  } else {
    if (gostaDejogosdecorrida) {
      return "the crew motorfast";
    } else {
      return "forza horizon 5";
    }
  }
}
