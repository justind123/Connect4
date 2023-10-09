board = [];
turn = 1;

function setup() {
    createCanvas(400, 400 - (400 / 7));

    for (let i = 0; i < 6; i++) {
        board[i] = [];
        for (let j = 0; j < 7; j++) {
            board[i][j] = 0;
        }
    }
    console.table(board);
}

function draw() {
    background('blue');
    let diameter = width / 7;
    for (let i = 0; i < board.length; i++) {
        //console.log('row: ' + i);
        for (let j = 0; j < board[i].length; j++) {
            //console.log('col: ' + j);
            if (board[i][j] === 0) {
                fill(255);
            }
            else if (board[i][j] === 1) {
                fill(255, 0, 0);
            }
            else if (board[i][j] === 2) {
                fill(255, 255, 0);
            }
            circle(j * diameter + (diameter / 2), 
            i * diameter + (diameter / 2), 
            diameter - 5);
        }
    }

    
    //noLoop();

}

function mouseReleased(event) {
    let colClicked = Math.floor(event.x / width * 7);

    for (let i = -1; i < board.length; i++) {
        if (i === board.length - 1 || board[i + 1][colClicked] !== 0) {
            board[i][colClicked] = turn;
            break;
        }
    }

    if (isGameOver()) {
        console.log('game over');
        alert('Game over!');
    }

    if (turn === 1) {
        turn = 2;
    }
    else {
        turn = 1;
    }

    return false;
}

function touchReleased(event) {
    let colClicked = Math.floor(event.x / width * 7);

    for (let i = -1; i < board.length; i++) {
        if (i === board.length - 1 || board[i + 1][colClicked] !== 0) {
            board[i][colClicked] = turn;
            break;
        }
    }

    if (isGameOver()) {
        console.log('game over');
        alert('Game over!');
    }

    if (turn === 1) {
        turn = 2;
    }
    else {
        turn = 1;
    }

    return false;
}

function isGameOver() {
    // horizontal check
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            if (turn == board[i][j] 
                && turn == board[i][j+1] 
                && turn == board[i][j+2] 
                && turn == board[i][j+3]) {
                return true;
            }
        }
    }

    // vertical check
    for (let i = 0; i < board.length - 3; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (turn == board[i][j] 
                && turn == board[i+1][j] 
                && turn == board[i+2][j] 
                && turn == board[i+3][j]) {
                return true;
            }
        }
    }

    //TODO: diag checks

    return false;
}