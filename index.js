let nickname = "fantloko"
let xp = 9999
var nivel = " "

if (xp <= 1000) {
    nivel = "Ferro"
} else if ( xp <= 2000) {
    nivel = "bronze"
} else if ( xp >= 2001 && xp <= 5000) {
    nivel = "prata"
} else if ( xp < 7000) {
    nivel = "ouro"
} else if ( xp < 8000) {
    nivel = "platina"
} else if ( xp < 9000) {
    nivel = "ascendente"
} else if ( xp < 10000) {
    nivel = "imortal"
} else {
    nivel = "Radiante"
}

console.log("O HEROI DE NOME " + nickname + " esta no nivel de " + nivel)
