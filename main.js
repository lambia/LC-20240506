//Creo un oggetto letterale "persona", con varie proprietà (chiave:valore)
let persona = {
	//chiave: valore
	nome: "Luca",
	cognome: "Lambiase",
	eta: 34,
	cittaNascita: "Salerno",
	cittaResidenza: "Torino"
}

//Aggiungo proprietà non esistenti all'oggetto
persona.mail = "luca.lambia+NOSPAM@gmail.com";
persona["telefono"] = "(555) 123-456-789"

//Stampo nome e cognome (proprietà dell'oggetto)
console.log( "Nome/Cognome di 'persona': ", `${persona.nome} ${persona.cognome}` );
//Stampo tutto l'oggetto
console.log("Intero oggetto 'persona': ", persona);




//Creo un array di oggetti
let studenti = [
	{ nome: "Mario", cognome: "Bros" },
	{ nome: "Luigi", cognome: "Bros" },
	{ nome: "Principessa", cognome: "Peach" }
];

//Stampo l'intero array di oggetti
console.log( "Intero array di oggetti: ", studenti );
//Stampo il primo oggetto dell'array
console.log( "Oggetto in posizione 0 dell'array: ", studenti[0] );

//Ciclo su tutto l'array
for (let i = 0; i < studenti.length; i++) {

	const studente = studenti[i];

	//Stampo tutto l'oggetto
	console.log("Oggetto in posizione N dell'array", studente);

	//Stampo solo nome e cognome
	console.log("Nome/Cognome in posizione N dell'array", `${studente.nome} ${studente.cognome}` );
}