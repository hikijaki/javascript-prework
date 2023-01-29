let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber ==2){
    computerMove = 'papier';
}
else {
    computerMove = 'nożyce';
}
*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else {
    playerMove = 'nożyce';
}
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Bot zagrał kamień a ty papier: Wygrywasz!');
}
else if (computerMove =='papier' && playerMove == 'kamień'){
  printMessage('Bot zagrał papier a ty kamień: Przegrywasz!');
}
else if(computerMove =='nożyce' && playerMove == 'nożyce'){
  printMessage('Bot zagrał nożyce a ty nożyce: Remis!');
}
else if(computerMove =='nożyce' && playerMove == 'papier'){
  printMessage('Bot zagrał nożyce a ty papier: Przegrywasz!');
}
else if(computerMove =='papier' && playerMove == 'papier'){
  printMessage('Bot zagrał papier a ty papier: Remis!');
}
else if(computerMove =='kamień' && playerMove == 'kamień'){
  printMessage('Bot zagrał kamień a ty kamień: Remis!');
}
else if(computerMove =='kamień' && playerMove == 'nożyce'){
  printMessage('Bot zagrał kamień a ty nożyce: Przegrywasz!');
}
else if(computerMove =='papier' && playerMove == 'nożyce'){
  printMessage('Bot zagrał papier a ty nożyce: Wygrywasz!');
}
else if(computerMove =='nożyce' && playerMove == 'kamień'){
  printMessage('Bot zagrał nożyce a ty kamień: Wygrywasz!!');
}
else {
  printMessage('Nieznany ruch');
}