let userEmail = prompt("Inserisci qui la tua email");
console.log(userEmail);

const party = ["simto1998@gmail.com", "simone.nolberto@leonori.it", "joyabela@outlook.com", "joy.abela@gmail.com"];
console.log(party);

for (let index = 0; index < party.length; index++) {
    const element = party[index];

    if (userEmail == element) {
        console.log("Benvenuto, si accomodi!");
        
    } else (userEmail != element)

        console.log("Spiacente, lei non può entrare");
    
}


// esercizio Dadi:


const userDice = Math.floor(Math.random() * 6) + 1;
console.log(userDice);

const pcDice = Math.floor(Math.random() * 6) + 1;
console.log(pcDice);


if (userDice > pcDice){
    console.log("Complimenti, ha vinto!");
} else {
    console.log("spiacenti, ritenti, sarà più fortunato");
}