// const squares = Array.from(document.querySelectorAll('.square'));
const turnbox = document.getElementById('turn');

let currentPlayer = 'X';






// factory
const Player = () => {
    let horizontalScore =
        verticalScore =
        middleScore = 0;

    const win = (yo) => {
        if (yo.aScore) console.log('booyakasha');
    }

    return { win };
}

// module, IIFE immediately invoked function expression
const gameBoard = (() => {
    let row1 = [0,0,0];
    let row2 = [0,0,0];
    let row3 = [0,0,0];
    board = [row1, row2, row3]

    const winChecker = (checkee) => {
        board = [gameBoard.row1, gameBoard.row2, gameBoard.row3];

        //vertical check
        for (let i = 0; i <= 2; i++) {
            let check = [...new Set([gameBoard.row1[i], gameBoard.row2[i], gameBoard.row3[i]])];
            if (check.length == 1 && check[0] == checkee) return true;
        }

        //horizontal check        
        for (let i = 0; i <= 2; i++) {
            let check = [...new Set(board[i])];
            if (check.length == 1 && check[0] == checkee) return true;
        }

        //diagonal check
        if (gameBoard.row1[0] == checkee && gameBoard.row2[1] == checkee && gameBoard.row3[2] == checkee ||
            gameBoard.row1[2] == checkee && gameBoard.row2[1] == checkee && gameBoard.row3[0] == checkee) {
                return true;
        }

        return false;
    }
    
    return { winChecker, row1, row2, row3, board }
})();




// gameBoard.row1 = [1,2,0]
// gameBoard.row2 = [1,2,0]
// gameBoard.row3 = [1,2,0]
// console.log(gameBoard.winChecker(2));

// gameBoard.row1 = [1,1,1]
// gameBoard.row2 = [1,2,0]
// gameBoard.row3 = [1,2,0]
// console.log(gameBoard.winChecker(2));

// gameBoard.row1 = [2,1,1]
// gameBoard.row2 = [1,2,0]
// gameBoard.row3 = [1,2,2]
// console.log(gameBoard.winChecker(2));

// console.log(gameBoard);
let mook = Player(1);


const squares = Array.from(document.querySelectorAll('.square'));

const reset = function() {
    // still need to remove previous event listeners
    squares.forEach(square => square.addEventListener('click', event => {
        chooseBox(square.id)
        square.removeEventListener('click', event); // doesnt work
    }, {once : true}));
}

reset();



function chooseBox(choice) {
    console.log('asdfjkasdl;');
    let square = document.getElementById(choice);
    square.removeEventListener('click', chooseBox) // doesnt work
    square.innerHTML = currentPlayer;
    let row = choice[0];
    let column = choice[1];
    gameBoard.board[row][column] = currentPlayer;
}






