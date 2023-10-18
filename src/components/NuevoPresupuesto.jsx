import React from 'react'

export default function NuevoPresupuesto() {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input 
                    type="text" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                />
            </div>

            <input type="submit" value='Añadir' />
        </form>
    </div>
  )
}
