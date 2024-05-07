console.log("Benvenuto");


let laMiaFunzioneClassica = function () {
	console.log("Hai eseguito una function, bravo!");
}
let laMiaFunzioneFreccia = () => {
	console.log("Hai eseguito una arrow function, bravo!");
}
laMiaFunzioneClassica();
laMiaFunzioneFreccia();

// document.getElementById("btn").addEventListener("click", laMiaFunzioneClassica );

document.getElementById("btn").addEventListener("click", function (event) {
	console.log("Hai eseguito una function ANONIMA", this);
	console.log("Oggetto evento funzione ANONIMA: ", event.target);
	console.log(nome);
});

document.getElementById("btn").addEventListener("click", (event) => {
	console.log("Hai eseguito una ARROW function ANONIMA", this);
	console.log("Oggetto evento ARROW function ANONIMA: ", event.target);
	console.log(nome);
});

// console.log( this );