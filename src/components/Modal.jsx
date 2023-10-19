import { useState } from "react";
import CerrarBtn from '../img/cerrar.svg';

export default function Modal({setModal, animarModal, setAnimarModal}) {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');


    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre del Gasto</label>

                    <input
                        id="nombre"
                        type="text" 
                        placeholder="Añade el gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id="cantidad"
                        type="number" 
                        placeholder="Añade la cantidad del gasto"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="nombre">Categoria</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccionar --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="facturas">Facturas</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit" 
                    value="Añadir Gasto"
                />
            </form>
        </div>
    )
}