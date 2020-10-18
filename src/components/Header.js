import { div } from 'prelude-ls'
import React from 'react'
import Wrapper from './styles/Wrapper'


function Header() {
    return (
        <div className="border-b border-braunBorder">
        <Wrapper>
        <div className="flex justify-between">
            <div>proper videos</div>
            <ol className="flex space-x-4">
                <li>submit videos</li>
                <li>about</li>
            </ol>
        </div>
        </Wrapper>
        </div>
    )
}

export default Header