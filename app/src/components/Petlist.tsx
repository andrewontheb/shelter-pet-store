import React from 'react';
import { observer } from "mobx-react-lite";
import { Pet as PetCard } from './Pet';
import { Filter } from '../components/Filter';
import { ICardStatus, IPet } from '../interfaces/Interfaces';
import { useRootStore } from '../store-context';

export const PetList = observer((): React.ReactElement => {
    const { petStore } = useRootStore();
    const pets = petStore.filteredPets;
    console.log('pet list rendering');

    const handlePetDeletion = (deletedPetId: number) => {
        console.log('deletion handling');
        return petStore.deletePet(deletedPetId);
    };

    const handleFilterChange = (status: ICardStatus) => {
        console.log('filter handling');
        petStore.setFilter(status);
    }

    return (
        <div className='relative h-screen fade-in-out min-w-[500px]'>
            <Filter onFilterChange={handleFilterChange} activeFilter={petStore.filter} />
            <div className='flex flex-wrap gap-4 justify-center p-4'>
                {pets && pets.length !== 0 ?
                    pets.map((pet: IPet) => {
                        return (
                            <PetCard pet={pet} key={pet._id} onPetDelete={handlePetDeletion} />
                        )
                    })
                    : <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center text-2xl text-gray-400'>No pets found</div>
                    </div>
                }
            </div>

        </div>
    )
})