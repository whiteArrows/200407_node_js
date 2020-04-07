var direBonjour = function(){
	console.log('Bonjour !');
}

var direByeBye = function(){
	console.log('Bye bye !');
}

/* toutes les fonctions que l'on exporte pas resteront privées.
Elles ne pourront pas être appelées de l'extérieur.
En revanche, elles pourront tout à fait être utilisées 
par d'autres fonctions de votre module. */

/* require() renvoie en fait un objet qui contient les fonctions que vous avez exportées
dans votre module.
Nous stockons cet objet dans une variable du même nom */
exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;