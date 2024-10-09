var ballsNumber = 0;
var empties_array = [];
var fulls_array = [];
var gamer_location = 0;

setInterval(TickTack, 1000);
document.addEventListener("keydown", moveGamer);



function load_game() {

  let doors = [4, 50, 95, 49]

  for(let i in doors){
    switch (i) {
      
      
      case '0':{
        console.log(document.getElementById('cell'+doors[i]).style);
        
        document.getElementById('cell'+doors[i]).style.borderTop = '1px white solid'
        break;
      }
      case '1':{
        document.getElementById('cell'+doors[i]).style.borderLeft = '0px'
        break;
      }
      case '2':{
        document.getElementById('cell'+doors[i]).style.borderBottom = '1px white solid'
        break;
      }
      case '3':{    
        document.getElementById('cell'+doors[i]).style.borderRight = '0px'
        break;
      }

    
      default:
        break;
    }
  }

  for (let i = 0; i < 100; i++) empties_array.push(i);

  gamer_location = Math.floor(Math.random() * 100);
  document.getElementById("cell" + gamer_location).innerHTML = "🤗";
  empties_array.splice(gamer_location, 1);
}

function TickTack() {
  //checking win
  if (empties_array.length == 0) {
    win();
    return;
  }
  let x, y, ball_location, rnd;

  //choose random location
  rnd = Math.floor(Math.random() * 100);
  ball_location = empties_array.splice(rnd % (empties_array.length - 1), 1);

  //fill the cell
  fulls_array.push(ball_location);
  document.getElementById("cell" + ball_location).innerHTML = "🏀";

  //checking lose
  if (empties_array.length == 100) gameOver();
}

function moveGamer(event) {
  let key_code = event.code;
  console.log( key_code);

  switch (key_code) {
    case "ArrowDown": {
      document.getElementById("cell" + gamer_location).innerHTML = "";
      empties_array.push(gamer_location);
      gamer_location = gamer_location < 90 ? gamer_location + 10 : gamer_location;
      gamer_location = gamer_location == 95 ? 4:gamer_location
      document.getElementById("cell" + gamer_location).innerHTML = "🤗";
      empties_array.splice(gamer_location, 1);
      break;
    }
    case "ArrowUp": {
      document.getElementById("cell" + gamer_location).innerHTML = "";
      empties_array.push(gamer_location);
      gamer_location = gamer_location > 9 ? gamer_location - 10 : gamer_location;
      gamer_location = gamer_location == 4 ? 95:gamer_location
      document.getElementById("cell" + gamer_location).innerHTML = "🤗";
      empties_array.splice(gamer_location, 1);
      break;
    }
    case "ArrowRight": {
      document.getElementById("cell" + gamer_location).innerHTML = "";
      empties_array.push(gamer_location);
      gamer_location = gamer_location%10 < 9 ? gamer_location + 1 : gamer_location;
      gamer_location = gamer_location == 49 ? 50:gamer_location
      document.getElementById("cell" + gamer_location).innerHTML = "🤗";
      empties_array.splice(gamer_location, 1);
      break;
    }
    case "ArrowLeft": {
      document.getElementById("cell" + gamer_location).innerHTML = "";
      empties_array.push(gamer_location);
      gamer_location = gamer_location%10 > 0 ? gamer_location - 1 : gamer_location;
      gamer_location = gamer_location == 50 ? 49:gamer_location
      document.getElementById("cell" + gamer_location).innerHTML = "🤗";
      empties_array.splice(gamer_location, 1);
      break;
    }

    default:
      break;
  }
}

function win() {
  alert('win!')
}

function gameOver() {
  alert('lose!')
}

function restart(){
  location.reload();
}