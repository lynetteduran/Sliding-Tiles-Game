var evaluateClick = true;
var board;
var emptyTile;

function Tile(x,y,el) {
  this.x = x;
  this.y = y;
  this.el = el;
  this.applyPosition = function() {
    this.el.style.left = this.x * 200 + "px";
    this.el.style.top = this.y * 200 + "px";
  }

  var tile = this;
  this.el.addEventListener('click', function(e) {
    if (evaluateClick == false) {
      return;
    }
    var xa = tile.x;
    var xe = emptyTile.x;
    var ya = tile.y;
    var ye = emptyTile.y;
    var dx = Math.abs(xa - xe);
    var dy = Math.abs(ya - ye);
    if ((dx == 0 && dy == 1) || (dx == 1 && dy == 0)) { 
      emptyTile.x = xa;
      emptyTile.y = ya;
      tile.x = xe;
      tile.y = ye;
      updateBoard();
    }
  });
}

function updateBoard() {
  board.forEach(function(tile) {
  tile.applyPosition();
  });
  checkWin();
}

function checkWin() {
   if  (tile0.x == 2 && tile0.y == 2
    &&  tile1.x == 0 && tile1.y == 0
    &&  tile2.x == 1 && tile2.y == 0
    &&  tile3.x == 2 && tile3.y == 0
    &&  tile4.x == 0 && tile4.y == 1
    &&  tile5.x == 1 && tile5.y == 1
    &&  tile6.x == 2 && tile6.y == 1
    &&  tile7.x == 0 && tile7.y == 2
    &&  tile8.x == 1 && tile8.y == 2) {
      document.getElementById('headline').innerHTML = "YOU WON!";
      document.getElementById('headline').style.visibility = "visible";
      evaluateClick = false;
  }
}

window.onload = function makeGame(e) {
  var tile0 = new Tile(0,2, document.getElementById("tile0"));
  var tile1 = new Tile(1,2, document.getElementById("tile1"));
  var tile2 = new Tile(2,2, document.getElementById("tile2"));
  var tile3 = new Tile(0,1, document.getElementById("tile3"));
  var tile4 = new Tile(1,1, document.getElementById("tile4"));
  var tile5 = new Tile(2,1, document.getElementById("tile5"));
  var tile6 = new Tile(0,0, document.getElementById("tile6"));
  var tile7 = new Tile(1,0, document.getElementById("tile7"));
  var tile8 = new Tile(2,0, document.getElementById("tile8"));

  board = [tile0, tile1, tile2, tile3, 
          tile4, tile5, tile6, tile7, tile8];
  emptyTile = tile0;
  updateBoard(); 
  document.getElementById('headline').innerHTML = "Go ahead, slide those tiles!"; 
  document.getElementById('gameplay').addEventListener('click', function(e) { 
    document.getElementById('headline').style.visibility = "hidden"; 
  }); 
}
