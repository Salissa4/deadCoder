import { useState, useCallback } from 'react';

export const useGameOver = () => {
    const [gameOver, setGameOver] = useState(true)

    const resetGame = useCallback(() => {
        setGameOver(false);
    }, []);

    return [gameOver, setGameOver, resetGame];
}

