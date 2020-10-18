import React from 'react'
import ReactPlayer from 'react-player'


function VidContainer() {
    return (
        <div className="flex-grow">
        <ReactPlayer 
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=52Gg9CqhbP8"/ >
        </div>
    )
}

export default VidContainer