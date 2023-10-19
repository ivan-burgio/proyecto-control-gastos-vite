import { useState } from 'react';
import Mensaje from './Mensaje';

export default function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();
        
        if(!presupuesto || presupuesto < 0) {
            setMensaje('Ingrese un presupuesto valido');
            return;
        }

        setMensaje('');
        setIsValidPresupuesto(true);
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    type="number" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}