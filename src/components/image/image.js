import React from 'react';
import './image.css';


function Image(props) {

    return(
        <div id='image'>
            <p id="image-header">{props.name}</p>
            <img    src={props.img}
                    onClick={() => props.onClick(props.id)}
                    alt={props.name}
            />
        </div>
    )

}

export default Image;
