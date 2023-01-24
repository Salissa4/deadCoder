import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PLAYERS } from '../../../utils/queries';
import { ADD_TETRIS_SCORE } from '../../../utils/mutations';

export default function Add_Score(gameStats) {
    console.log(gameStats)
    const allPlayersData = useQuery(QUERY_ALL_PLAYERS);
    const allPlayers = allPlayersData.data?.allPlayers || [];
    const randplayerID = allPlayers[0]?._id || [];

    // console.log(randplayerID)
    // const [addScore, { error }] = useMutation(ADD_TETRIS_SCORE)
    // const score = gameStats.points;

    // const scoredgame = await addScore({ variables: { userId: randplayerID, score: score }})
    
    // console.log(scoredgame)
}