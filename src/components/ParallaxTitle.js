import React from 'react';
import {Parallax} from "react-parallax";

const ParallaxTitle = ({background, title}) => {
    return (
        <Parallax
            className="app__parallax mb-5 px-5"
            bgImage={background}
            strength={- window.innerHeight / 3}
        >
            <div>
                <h1>
                    {title}
                </h1>
            </div>
        </Parallax>
    );
};

export default ParallaxTitle;