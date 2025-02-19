import React, { useState, useCallback } from 'react'
import { Store } from 'react-notifications-component';
import { IPet, IProps } from '../interfaces/Interfaces'


export const Pet = ({ pet, onPetDelete }: IProps): React.ReactElement<IProps> => {
    const [petState] = useState<IPet>(pet);
    const date: Date = new Date();
    const formattedDate: string = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    const handleDeletionClick = useCallback(() => {
        if (!petState?._id) {
            console.error('Pet ID is missing');
            return;
        }
        onPetDelete(petState?._id).then((res) => {
            if (res) {
                Store.addNotification({
                    title: 'Done!',
                    message: 'Post is deleted',
                    type: 'success',
                    insert: 'bottom',
                    container: 'bottom-center',
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                    }
                });
            }
           
        });
    }, [onPetDelete]);

    return (
        <div key={petState?._id} className='card relative box-border flex w-[calc(33%-16px)] border-indigo-200 border-2
                                      flex p-5 bg-white rounded-md text-black hover:shadow-lg hover:shadow-indigo-500/40 hover:rounded-md'>
            <button onClick={handleDeletionClick} type="button" className="ml-auto absolute top-0 right-0 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="card-header">
                <div className="date-of-lose text-left">{formattedDate}</div>
                <div className="status font-medium text-xl text-slate-400 text-center">{petState.status.toUpperCase() + ' ' + petState.type.toUpperCase()}</div>
            </div>

            <div className="card-pet-details flex">
                <div className="card-pet-img shrink-0 transition shadow-lg size-24 md:size-32 lg:size-32">
                    <img src={petState.photo} alt="pet" className='w-full min-h-full h-auto object-cover hover:shadow-lg rounded-md' />
                </div>
                <div className="card-pet-info w-full text-left pl-5">
                    <div className="inline">
                        <p>Name: {petState.name}</p>
                        <p>Age: {petState.age}</p>
                        <p>Breed: {petState.breed}</p>
                        <p>Color: {petState.color}</p>
                        <p>Reward: 100$</p>
                        <p>City: New-York</p>
                    </div>
                </div>
            </div>

            <div className="card-description text-neutral-900">
                <p className='text-stone-700'>{petState.description}</p>
            </div>

            <div className="card-author-contacts text-l font-medium text-zinc-500">
                <p>+{petState.phone}</p>
            </div>
        </div>
    )
}
