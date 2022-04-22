import './App.css';
import './components/NavBar/NavBar.css';
import './components/Control/Control.css';
import './components/Sucus/Sucus.css';
import './components/Logo/Logo.css';
import './components/Sectores/Sectores.css';
import NavBar from './components/NavBar/NavBar';
import Control from './components/Control/Control';
import Sucus from './components/Sucus/Sucus';
import Logo from './components/Logo/Logo';
import Display from './components/Display/Display';
import Sectores from './components/Sectores/Sectores';
function App() {
  let sctr = "Laboratorio"; // POR AHORA SE USA ESTA VARIABLE COMO EJEMPLO PERO MAS ADELANTE SE TOMARA EL VALOR INGRESADO EN EL FORMULARIO DEL NAVBAR.JSX
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
      <NavBar /> {/* BARRA DE NAVEGACION DONDE EL USUARIO QUE QUIERA VISUALIZAR EL ESTADO DE LOS CHOFERES DEBERA LOGEARSE Y ELEGIR QUE VISTA VER */}
      <Control sector={sctr} /> {/* SE IMPRIME EL NOMBRE DEL SECTOR AL QUE PERTENECE LA PERSONA QUE SE LOGEA A TRAVES DEL NAVBAR.JSX PARA REALIZAR LOS CAMBIOS DE ESTADO DE LOS CHOFERES*/}
      <Display> {/* EN EL COMPONENTE DISPLAY SE MOSTRARAN CUALQUIERA DE LOS DOS MENUS SELECCIONADOS POR EL USUARIO A TRAVES DEL NAV (VISTA POR SUCURSAL O POR SECTOR) */}
        <Sucus /> {/* TODAS LAS SUCURSALES DE LA CADENA CON SU RESPECTIVO NUMERO */}
        <Sectores /> {/* TODOS LOS SECTORES DENTRO DEL LUGAR QUE SE LLAMA BASE12 (ES COMO OTRA SUCURSAL DONDE LOS CHOFERES CARGAN REPUESTOS E INSUMOS PARA LAS SUCURSALES) */}
      </Display>
      </header>
    </div>
  );
  
}

export default App;
