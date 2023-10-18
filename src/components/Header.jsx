import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto';

export default function Header() {
  return (
    <>
        <header>
            <h1>Planificador de Gastos</h1>
            <NuevoPresupuesto />
        </header>
    </>
  )
}
