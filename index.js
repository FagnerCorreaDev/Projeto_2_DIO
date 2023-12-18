// Projeto 2 DIO
/*
    ------>> O QUE DEVER SER UTILIZADO <<-------
    - VARIÁVEIS
    - OPERADORES
    - LAÇOS DE REPETIÇÃO
    - ESTRUTURAS DE DECISÃO
    - FUNÇÕES
    ------>> OBJETIVO <<-------
    CRIE UMA FUNÇÃO QUE RECEBE COMO PARÂMETROS A QUANTIDADE
    DE VITÓRIAS E DERROTAS DE UM JOGADOR, 
    DEPOIS DISSO RETORNE O RESULTADO PARA UMA VARIÁVEL, 
    O SALDO DE RANQUEADOS DEVE SER FEITO ATRAVÉS DO CALCULO 
    (VITÓRIAS - DERROTAS)
    Se vitórias for menor que 10 = Ferro [<=10]
    Se vitórias for entre 11 e 20 = Bronze [>10 e <21]
    Se vitórias for entre 21 e 50 = Prata [>20 e <51]
    Se vitórias for entre 51 e 80 = Ouro [>50 e <81]
    Se vitórias for entre 81 e 90 = Diamante [>80 e <91]
    Se vitórias for entre 91 e 100 = Lendário [>90 e <101]
    Se vitórias for maior ou igual a 101 = Imortal [>=101]
    ------->> SAÍDA <<-------
    Ao final deve se exibir uma mensagem:
    "O herói tem saldo de {saldoDeVitorias} está no nível de {nível}"
*/
let wins = 122
let loses = 0
var res = checkRank(wins, loses)
var level = checkLv()

console.log("O herói tem saldo de " + res + ", está no nível de " + level)

function checkLv() {
    let lv = " "
    if (res <= 10) {
        lv = "Ferro"
        return lv
    } else if ((res > 10) && (res < 21)) { //11 20
        lv = "Bronze"
        return lv
    } else if ((res > 20) && (res < 51)) { //21 50
        lv = "Prata"
        return lv
    } else if ((res > 50) && (res < 81)) { // 51 80
        lv = "Ouro"
        return lv
    } else if ((res > 80) && (res < 91)) { // 81 90
        lv = "Diamante"
        return lv
    } else if ((res > 90) && (res < 101)) { // 91 100
        lv = "Lendário"
        return lv
    } else {
        lv = "Imortal"
        return lv
    }
}
function checkRank(numWins, numLoses) {
    result = numWins - numLoses
    return result
}