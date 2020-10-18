import React from 'react'
import Wrapper from './styles/Wrapper'


function Controller() {
    return (
        <div>
            <div className="border-t border-braunBorder">
                <Wrapper>
                    <div className="flex justify-between">
                        <div> Previous Video</div>
                        <div className="text-braunOrange"> Skip Video</div>
                        <div> Hide Panel</div>
                    </div>
                </Wrapper>
            </div>

            <div className="border-t border-braunBorder">
                <Wrapper>
                    <div className="flex justify-between space-x-8">
                        <div>
                            <div>Next Video</div>
                            <div>How Joy Division did formed and influenced the whole world</div>
                        </div>
                        <div className="text-right text-braunGrey">
                            <div>Next Video</div>
                            <div>How Joy Division did formed and influenced the whole world</div>
                        </div>
                    </div>
                </Wrapper>
            </div>
 
    </div>
    )
}


export default Controller