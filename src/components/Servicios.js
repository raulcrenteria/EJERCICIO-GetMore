import React from 'react';
import "./servicios.css";

class Servicios extends React.Component{
    render(){

        const p1 = this.props.servicio1.periodicidad;
        const p2 = this.props.servicio1.diagnostico; 
        const p3 = this.props.servicio1.plan;
        const p4 = this.props.servicio1.atencion;

        const p5 = this.props.servicio2.periodicidad;
        const p6 = this.props.servicio2.diagnostico; 
        const p7 = this.props.servicio2.plan;
        const p8 = this.props.servicio2.dinamica;
        const p9 = this.props.servicio2.atencion;
        

        return(

            <div className="seccion1">
                <section>

                    <div>
                        <div>
                            <div>

                                <div className="miniContainer1">
                                    <div>
                                        <img src="http://alegpaez.com/static/img/icons/computer.svg">
                                        <div>
                                            <p>Asesoría en línea</p>
                                            <p>$ 400</p>
                                        
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/headphones.svg">
                                                        <p>{p1}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/diagnost.svg">
                                                        <p>{p2}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/listonly.svg">
                                                        <p>{p3}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/whatsapp-red.svg">
                                                        <p>{p4}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="miniContainer2">

                                <div>
                                        <img src="http://alegpaez.com/static/img/icons/doctor.svg">
                                        <div>
                                            <p>Consulta Presencial</p>
                                            <p>$ 500</p>
                                        
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/mesure.svg">
                                                        <p>{p5}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/diagnost.svg">
                                                        <p>{p6}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/listonly.svg">
                                                        <p>{p7}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/brain.svg">
                                                        <p>{p8}</p>
                                            </div>
                                            <div className="list">
                                                        <img src="http://alegpaez.com/static/img/icons/whatsapp.svg">
                                                        <p>{p9}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            
            
            </div> 



            


        );

    }
}

export default Servicios;