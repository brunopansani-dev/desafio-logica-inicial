let xp = 7500;
let nivel;
let nome;

if (xp < 1000) {
    nivel = "Ferro";
    nome = "Ragnar";
}

if (xp >= 1000 && xp < 2000) {
    nivel = "Bronze";
    nome = "Ryan";
}

if (xp >= 2000 && xp < 5000) {
    nivel = "Prata";
    nome = "Lara";
}

if (xp >= 5000 && xp < 7000) {
    nivel = "Ouro";
    nome = "Goku";
}

if (xp >= 7000 && xp < 8000){
    nivel = "Platina";
    nome = "Saitama";
}

if (xp >= 8000 && xp < 9000) {
    nivel = "Ascendente";
    nome = "Dante";
}

if (xp >= 9000 && xp < 10000) {
    nivel = "Imortal";
    nome = "Kratos";
}

if (xp >= 10000) {
    nivel = "Radiante";
    nome = "Thor";
}

console.log(`O Herói de nome ${nome} está no nível ${nivel}.`);