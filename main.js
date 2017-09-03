var clozeCard = require('./clozeCard.js');
var basicCard = require('./basicCard.js');

var firstPresidentBasic = new basicCard(
"Who was the first president of the United States?", "George Washington");

console.log('front: ' + firstPresidentBasic.front); 
console.log('back: ' + firstPresidentBasic.back); 

console.log('----------------------------------')

var firstPresidentCloze = new clozeCard(
"George Washington was the first president of the United States.", "George Washington");
console.log('partial: ' + firstPresidentCloze.partial); 
console.log('cloze: ' + firstPresidentCloze.cloze); 
console.log('fullText: ' + firstPresidentCloze.fullText); 