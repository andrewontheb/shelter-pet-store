import React, { useCallback, useState } from 'react';
import { Store } from 'react-notifications-component';
import { useRootStore } from '../store-context';
import { IPet } from '../interfaces/Interfaces';

export function Form(): React.ReactElement {

    console.log('form rendering');
    const emptyFormState: IPet = {
        name: '',
        type: 'cat',
        breed: '',
        age: null,
        color: '',
        description: '',
        status: 'lost',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudNHv8lJJ8yGvTYxoiHOSFc34sv4V5iFQHA&s',
        phone: 89996667766
    };
    const [formData, setFormData] = useState(emptyFormState);
    const { petStore } = useRootStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        petStore.addPet(formData).then((res) => {
            if (res) {
                Store.addNotification({
                    title: "Great!",
                    message: "Post is published",
                    type: "success",
                    insert: "bottom",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                    }
                });
            }
        });

    };

    const handleInputChange = useCallback((e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prevState: IPet) => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    return (
        <>
            <h1 className='title text-indigo-500 py-12 font-light'>Fill the form to publish post</h1>
            <form onSubmit={handleSubmit} className='fade-in-out'>
                <div className="form bg-indigo-400">
                    {/* <div className="title text-xl font-bold">Fill the form to publish post</div> */}

                    <div className="input-container">
                        <input required id="firstname" name="name" value={formData.name} className="input placeholder:text-sky-400 text-violet-600 bg-white placeholder:text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-300" type="text" placeholder="name" onChange={handleInputChange} />
                        <label htmlFor="firstname" className="placeholder ">Pet name:</label>
                    </div>
                    <div className="input-container">
                        <input id="breed" name="breed" value={formData.breed} className="input placeholder:text-sky-400 text-violet-600 bg-white placeholder:text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-300" type="text" placeholder="breed" onChange={handleInputChange} />
                        <div className="cut"></div>
                        <label htmlFor="breed" className="placeholder">Breed:</label>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="animal">Type:</label>
                        <select value={formData.type} name="type" id="animal" onChange={handleInputChange}>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <input id="age" name="age" className="input placeholder:text-sky-400 text-violet-600 bg-white placeholder:text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-300" type="number" min="0" placeholder="age" onChange={handleInputChange} />
                        <label htmlFor="age" className="placeholder">Age:</label>
                    </div>

                    <div className='input-container'>
                        <input id="color" className="input placeholder:text-sky-400 text-violet-600 bg-white placeholder:text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-300" type="text" placeholder="Color" name="color" onChange={handleInputChange} />
                        <label htmlFor="color" className="placeholder">Color:</label>
                    </div>

                    <div className='input-container'>
                        <label htmlFor="status" className="placeholder">Status:</label>
                        <select name="status" id="status" value={formData.status} onChange={handleInputChange} required>
                            <option value="lost">Lost</option>
                            <option value="found">Found</option>
                            <option value="free">Free</option>
                        </select>
                    </div>
                    <div className='input-textarea'>
                        <label htmlFor="description" className="placeholder">Description:</label>
                        <textarea name="description" id="description" onChange={handleInputChange} className="field-textarea w-full text-slate-500"></textarea>
                    </div>
                    <button type="submit" className="submit bg-violet-500 active:bg-violet-600">Publish</button>
                </div>
            </form>

            {/* <form className="max-w-lg mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none k:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form> */}
        </>

    );
};

export default Form;