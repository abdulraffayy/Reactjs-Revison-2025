import React from 'react'
import { useState } from 'react'

export const Rafay = () => {
    const userName = 'Rafay'
    const [name, setName] = useState('Rafay')

    const changeName = () => {
        setName('Rafay Khan')
    }

    return (
        <>
        <h1>Rafay component</h1>
        <h2>{name}</h2>
        <button onClick={() => setName('Rafay Khan')}>Change Name{userName}</button>
        
        <button onClick={changeName}>Change Name</button>
        </>
    )
}
