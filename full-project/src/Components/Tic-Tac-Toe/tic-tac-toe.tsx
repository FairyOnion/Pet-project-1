import './tic-tac-toe-styles.css'
import {useState} from 'react'

export default function TicTacToe () {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i: number) {

        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        if (xIsNext) {
                nextSquares[i] = "X";
            } else {
                 nextSquares[i] = "O";
            }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function Square({ value, onSquareClick, ariaLabel } : {value: string, onSquareClick: any, ariaLabel: string}) {
        return (
            <button className="square" onClick={onSquareClick} aria-label={ariaLabel}>
            {value}
            </button>
        );
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
            status = "Winner: " + winner;
        } else if (!winner && squares.every(item => item !== null)){
            status = "It is a draw!"
        } else {
            status = "Next player: " + (xIsNext ? "X" : "O");
        }

    function handleGameRestart () {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }
    
    return (
        <div id='tic-tac-toe-zone' className='grid-tile-third-row'>
            <h2>Tic-Tac-Toe</h2>
            <div id='game-container'>
                <div className='board-row'>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} ariaLabel='Row 1, Column 1'/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} ariaLabel='Row 1, Column 2'/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} ariaLabel='Row 1, Column 3'/>
                </div>
                <div className='board-row'>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} ariaLabel='Row 2, Column 1'/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} ariaLabel='Row 2, Column 2'/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} ariaLabel='Row 2, Column 3'/>
                </div>
                <div className='board-row'>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} ariaLabel='Row 3, Column 1'/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} ariaLabel='Row 3, Column 2'/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} ariaLabel='Row 3, Column 3'/>
                </div>
                <p id='game-results'>{status}</p>
                <button id='play-again-btn' onClick={handleGameRestart}>Play Again</button>
            </div>
        </div>
    )
}

function calculateWinner(squares : any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}