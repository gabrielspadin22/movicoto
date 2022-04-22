import React from 'react';

function Logo() {
    return (
        <div className='navbar pdd'>
            <img src="/movi.png" alt="" height="30px" width="125px" className="logo" />
            <span>-</span>
            <img src="/logo.png" alt="" height="30px" width="125px" className="logo" />
        </div>
    );
}

export default Logo;