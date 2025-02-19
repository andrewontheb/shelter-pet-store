import React, { useState, useEffect } from 'react';
import { Pet as PetCard } from './Pet';
import { IPet } from '../interfaces/Interfaces';

export function PetList(): React.ReactElement {
    const [pets, setPets] = useState<IPet[] | null>(null);
    useEffect(() => {
        fetch('http://localhost:5050/pets')
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(error => console.error('Error fetching card data:', error));
    }, []);

    const handlePetDeletion = (deletedPetId: number | null) => {
        setPets(pets.filter(pet => pet._id !== deletedPetId));
    };
    return (
        <>
            {
                pets && pets.map((pet: IPet) => {
                    return (
                        <PetCard pet={pet} key={pet._id} onPetDelete={handlePetDeletion} />
                    )
                })
            }
        </>
    )
}