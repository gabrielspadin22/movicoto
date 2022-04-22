import React from 'react';

function Control({sector}) {
    return (
        <div className='control-container'>
            <div className="sector">{sector}</div>
            <div className="container">
                <button className="v1 nums rec1 reset">1</button>
                <button className="v2 nums rec2 reset">2</button>
                <button className="v3 nums rec3 reset">3</button>
                <button className="v4 nums rec4 reset">4</button>
                <button className="v5 nums rec5 reset">5</button>
                <button className="v6 nums rec6 reset">6</button>
                <button className="v7 nums rec7 reset">7</button>
                <button className="v8 nums rec8 reset">8</button>
                <button className="v9 nums rec9 reset">9</button>
                <button className="v10 nums rec10 reset">10</button>
                <button className="v11 nums rec11 reset">11</button>
                <button className="v12 nums rec12 reset">12</button>
                <button className="v13 nums rec13 reset">13</button>
                <button className="cd nums rec14 reset">CD</button>
            </div>
        </div>
    );
}

export default Control;