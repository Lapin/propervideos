import React from 'react'
import Wrapper from './styles/Wrapper'
import ReactPlayer from 'react-player'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


function VidContainer() {
    return (
        <div className="flex-grow relative">
        <ReactPlayer 
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=52Gg9CqhbP8"/ >

        <div 
            className='absolute bottom-0 inset-x-0 bg-braunNotWhite bg-opacity-75'>
            <Wrapper>
                <div className='flex space-x-8'>
            <button>pause</button>
            <div>volume</div>
            <div >
            <Slider />
            <Range />
            </div>
            </div>
            </Wrapper>
        </div>
        </div>
    )
}

export default VidContainer