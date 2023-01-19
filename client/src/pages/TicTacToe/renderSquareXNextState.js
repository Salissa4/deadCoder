function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        const nextSquares = squares.slice();
        nextSquares[i] = isXNext ? "X" : "O";
        setSquares(nextSquares);
               
        setIsXNext(!isXNext); // toggle turns
      }}
    />;
  }