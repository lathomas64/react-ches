export function initializeChessboard() {
    //return a 2 dimensional array of null or piece objects
    var board = Array.from(Array(8), () => new Array(8).fill({empty: true}));

    board[0][0] = { piece: { name: "rook", color: "black" } };
    board[0][1] = { piece: { name: "knight", color: "black" } };
    board[0][2] = { piece: { name: "bishop", color: "black" } };
    board[0][3] = { piece: { name: "queen", color: "black" } };
    board[0][4] = {
        piece: { name: "king", color: "black" }
    };
    board[0][5] = {
        piece: { name: "bishop", color: "black" }
    };
    board[0][6] = {
        piece: { name: "knight", color: "black" }
    };
    board[0][7] = {
        piece: { name: "rook", color: "black" }
    };

    board[1][0] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][1] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][2] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][3] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][4] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][5] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][6] = {
        piece: { name: "pawn", color: "black" }
    };
    board[1][7] = {
        piece: { name: "pawn", color: "black" }
    };

    board[6][0] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][1] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][2] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][3] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][4] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][5] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][6] = {
        piece: { name: "pawn", color: "white" }
    };
    board[6][7] = {
        piece: { name: "pawn", color: "white" }
    };

    board[7][0] = {
        piece: { name: "rook", color: "white" }
    };
    board[7][1] = {
        piece: { name: "knight", color: "white" }
    };
    board[7][2] = {
        piece: { name: "bishop", color: "white" }
    };
    board[7][3] = {
        piece: { name: "queen", color: "white" }
    };
    board[7][4] = {
        piece: { name: "king", color: "white" }
    };
    board[7][5] = {
        piece: { name: "bishop", color: "white" }
    };
    board[7][6] = {
        piece: { name: "knight", color: "white" }
    };
    board[7][7] = {
        piece: { name: "rook", color: "white" }
    };

    return board;
}

export function attemptMove(board, from, to) {
    console.log('attemptMove called successfully');
    //legality checks
    board[to.row][to.col] = board[from.row][from.col];
    board[from.row][from.col] = { empty: true };
    return board;
}