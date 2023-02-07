
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  }
  return 'nieznany ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


function displayResults(argComputerMove, argPlayerMove){
  if( argcomputerMove == 'kamień' && argplayerMove == 'papier'){
    printMessage('Bot zagrał kamień a ty papier: Wygrywasz!');
  }
  else if (argcomputerMove =='papier' && argplayerMove == 'kamień'){
    printMessage('Bot zagrał papier a ty kamień: Przegrywasz!');
  }
  else if(argcomputerMove =='nożyce' && argplayerMove == 'nożyce'){
    printMessage('Bot zagrał nożyce a ty nożyce: Remis!');
  }
  else if(argcomputerMove =='nożyce' && argplayerMove == 'papier'){
    printMessage('Bot zagrał nożyce a ty papier: Przegrywasz!');
  }
  else if(argcomputerMove =='papier' && argplayerMove == 'papier'){
    printMessage('Bot zagrał papier a ty papier: Remis!');
  }
  else if(argcomputerMove =='kamień' && argplayerMove == 'kamień'){
    printMessage('Bot zagrał kamień a ty kamień: Remis!');
  }
  else if(argcomputerMove =='kamień' && argplayerMove == 'nożyce'){
    printMessage('Bot zagrał kamień a ty nożyce: Przegrywasz!');
  }
  else if(argcomputerMove =='papier' && argplayerMove == 'nożyce'){
    printMessage('Bot zagrał papier a ty nożyce: Wygrywasz!');
  }
  else if(argcomputerMove =='nożyce' && argplayerMove == 'kamień'){
    printMessage('Bot zagrał nożyce a ty kamień: Wygrywasz!!');
  }
  else {
    printMessage('Nieznany ruch');
  }
}


