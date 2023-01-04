import React from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = (score , xPlaying) => {
    const {Xscore , Oscore} = score;
  return (
    <div className="scoreboard">
        <span className={`score X-score ${!xPlaying && "inactive"}`}>X - {Xscore}</span>
        <span className={`score O-score ${xPlaying && "inactive"}`}>O - {Oscore} </span>
        </div>
  )
}
