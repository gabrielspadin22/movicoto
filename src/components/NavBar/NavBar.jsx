import React from 'react';

function NavBar(props) {
    return (
        <div className='navbar'>
            <h1>Movi-Coto</h1>
            <div>
                <ul>
                    <li><button className='btn'>Vista por sucursal</button></li>  
                    <li><button className='btn'>Vista por sector (B12)</button></li>                   
                </ul>
                <form action="">
                    <input type="number" placeholder='Legajo'/>
                    <input type="password" name="" id="" placeholder='Contraseña' />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default NavBar;