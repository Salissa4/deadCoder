function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
      }}
    />;
  }