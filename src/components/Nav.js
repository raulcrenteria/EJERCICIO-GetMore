import React from 'react';
import './nav.css';

class Nav extends React.Component{
    render(){
        return(
            
                <nav>
                    <div>

                            <div>
                                <div className="cherry"><a className="navbar-logo"><img src="../../imagenes/logo-alegpaez-06@3x.png"></a></div>
                            </div>
                            
                            
                            <div>
                                <ul>
                                    <li>Inicio</li>
                                    <li>Recetas</li>
                                    <li>Videos</li>
                                    <li>Servicios</li>
                                    <li>Acerca de mi</li>
                                    <li>Blog</li>
                                    <li>Contacto</li>
                                </ul>
                            </div>


                    </div>
                </nav>

        );
    }
}

export default Nav;