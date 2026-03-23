const xp = 7500;
let nivel, nome;

if (xp >= 10000)       { nivel = "Radiante";   nome = "Thor";    }
else if (xp >= 9000)   { nivel = "Imortal";    nome = "Kratos";  }
else if (xp >= 8000)   { nivel = "Ascendente"; nome = "Dante";   }
else if (xp >= 7000)   { nivel = "Platina";    nome = "Saitama"; }
else if (xp >= 5000)   { nivel = "Ouro";       nome = "Goku";    }
else if (xp >= 2000)   { nivel = "Prata";      nome = "Lara";    }
else if (xp >= 1000)   { nivel = "Bronze";     nome = "Ryan";    }
else                   { nivel = "Ferro";       nome = "Ragnar";  }

console.log(`O Herói de nome ${nome} está no nível ${nivel}.`);