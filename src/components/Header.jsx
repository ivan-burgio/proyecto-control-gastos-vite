import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto';

export default function Header({presupuesto, setPresupuesto}) {
  return (
    <>
        <header>
            <h1>Planificador de Gastos</h1>
            <NuevoPresupuesto 
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
            />
        </header>
    </>
  )
}
