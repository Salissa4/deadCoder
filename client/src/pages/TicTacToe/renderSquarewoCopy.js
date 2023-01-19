
function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        squares[i] = 'X';
        setSquares(squares);
      }}
    />;
  }