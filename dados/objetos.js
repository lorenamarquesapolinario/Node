const funcionario1 = {};
// console.log(typeof(funcionario1))

funcionario1.nome = "José";
funcionario1.cargo = "Professor";
funcionario1.email = "josedeassisfilho@gmail.com";
funcionario1.salario = 8000;
funcionario1.insta = "@prof.joseassis";

console.log(funcionario1);
console.log(funcionario1.cargo)

funcionario1.nome = "José de Assis";
console.log(funcionario1);

delete funcionario1.insta;
console.log(funcionario1);




const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@email.com",
    salario: 400000
}

console.log(funcionario2);

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1);


const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@email.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3);


const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@email.com",
    salario: 2000,
    ...endereco1 // apread operator
}
console.log(funcionario4);


const funcionario5 = {
    nome: "Tony Atark",
    cargo: "Engenheiro",
    email: "ironman@email.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("(:");
    }
}
console.log(funcionario5);
console.log(funcionario5.armadura.versao);
console.log(funcionario5.suitUp());