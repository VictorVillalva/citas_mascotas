import React from 'react'

const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'>Hook</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className='font-normal normal-case'>Victor</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'>correo@correo.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
        <span className='font-normal normal-case'>21 de Marzo de 2023</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, cupiditate culpa! Adipisci quod veritatis deserunt. Aperiam, labore veniam esse, recusandae reiciendis nihil possimus vitae quisquam maxime eligendi est qui repudiandae!</span>
        </p>
    </div>
  )
}

export default Paciente
