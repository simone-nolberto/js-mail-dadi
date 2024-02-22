let userEmail = document.getElementById("usermail");
console.log(userEmail.value);

const party = ["simto1998@gmail.com", "simone.nolberto@leonori.it", "joyabela@outlook.com", "joy.abela@gmail.com"];
console.log(party);

const trigger = document.querySelector(".enter")
trigger.addEventListener('click', function () {
    let email = userEmail.value;
    console.log(email);
    let control = false;

    for (let index = 0; index < party.length; index++) {
        const element = party[index];

        if (element === email) {
            control = true;
        }

    }

    if (control) {
        alert("Benvenuto, si accomodi!");
    } else {
        alert("Spiacente, lei non può entrare");
    }

});


// esercizio Dadi:

const diceTrigger = document.querySelector(".dice")
diceTrigger.addEventListener('click', function () {


    const userDice = Math.floor(Math.random() * 6) + 1;
    console.log(userDice);
    let userOutput = document.querySelector(".user-dice");
    userOutput.innerHTML+= userDice;

    const pcDice = Math.floor(Math.random() * 6) + 1;
    console.log(pcDice);
    let pcOutput = document.querySelector(".pc-dice");
    pcOutput.innerHTML+= pcDice;


    if (userDice > pcDice) {
        console.log("Complimenti, ha vinto!");
    } else {
        console.log("spiacenti, ritenti, sarà più fortunato");
    }

})