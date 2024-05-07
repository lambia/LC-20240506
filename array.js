const students = ['Paolo', 'Giulia', 'Marco'];

for (let i = 0; i < students.length; i++) {
	const studente = students[i];
	console.log(studente);
}

students.forEach( vattelapesca );

function vattelapesca(studente, indice, collezione) {
	console.log(indice, studente);
}

//for...of => element of array
//mentre invece for...in => property in object
for (const studente of students) {
	console.log("for...of", studente);
}

/********************************************* */

const cats = [
	{name: 'Jerry', color: 'Gray'},
	{name: 'Felix', color: 'Black and White'},
	{name: 'Garfield', color: 'Orange'},
];
   
cats.forEach((element) => console.log(`${element.name}'s color is ${element.color}`) );

for (const gatto of cats) {
	console.log( gatto.name + ' è di colore ' + gatto.color );
}
