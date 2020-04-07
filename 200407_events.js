/* tuto openclassrooms */

var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.end();
});

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
	console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');

/* envoie le nom d'un nouveau joueur qui arrive et son âge */
jeu.on('nouveaujoueur', function(name, age){
	console.log(name, age);
});

jeu.emit('nouveaujoueur', 'Mario', 35);

server.listen(3000);