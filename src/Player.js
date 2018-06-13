import React from 'react'
import PlayerAPI from './Api'
import { Link } from 'react-router-dom'

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <h2>Average Points: {player.avgPoints}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}

export default Player
