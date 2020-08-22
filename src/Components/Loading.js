import React from 'react'
import Moto from '../images/moto.png'

const Loading = ( props ) => {
    return (
        <div className="loading">
            <img className="moto" src={Moto} alt="moto"/>
            <h3>Loading...</h3>
        </div>
    );
}

export default Loading;