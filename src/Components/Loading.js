import React from 'react'
import Moto from '../images/moto.png'

const Loading = ( props ) => {
    return (
        <div className="loading">
            {/* loading spinner */}
            <img className="moto" src={Moto} alt="moto"/>
            <h2>Loading...</h2>
        </div>
    );
}

export default Loading;