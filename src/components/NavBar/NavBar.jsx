import React from 'react';

function NavBar() {
    return (
        <div className='navbar'>
            <div>
                <ul>
                    <li><button className='btn'>Vista por sucursal</button></li>  
                    <li><button className='btn'>Vista por sector (B12)</button></li>                   
                </ul>
                <form action=""> {/* LOGEO DEL USUARIO CORRESPONDIENTE A SU SECTOR EL CUAL SE IMPRIME EN EL CONTROL.JSX*/}
                    <input id='usr' type="number" placeholder='Legajo'/>
                    <input type="password" name="" id="" placeholder='Contraseña' />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}
export default NavBar;