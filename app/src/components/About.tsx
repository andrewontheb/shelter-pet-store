import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from '../store-context';

export const About = observer((): React.ReactElement => {
    // const { petStore } = useRootStore();
    console.log('about rendering');
    return (
        <div className="text-l font-medium text-zinc-500 w-6/12 fade-in-out w-full px-32">
            <h1 className="py-12 text-center title text-indigo-500 font-light">About Us</h1>
            <div className="about-info text-left">
                {/* <h1>{}</h1>                 */}
                <div className="flex items-start flex-col lg:flex-row">
                    <img className="size-64 w-full rounded-md min-h-full h-auto pb-5 object-cover mr-5 max-w-[500px]" src="/src/assets/shelter.jpg" alt="shelter" />
                    <p>Animal shelters play a vital role in providing care and protection to homeless, abandoned, or mistreated animals. These shelters offer a safe haven where animals receive food, medical attention, and love while waiting for their forever homes. Many shelters also work to rehabilitate injured or traumatized animals, giving them a second chance at life. Beyond just housing animals, shelters often engage in educational campaigns to promote responsible pet ownership and the importance of spaying and neutering to control overpopulation.</p>
                </div>
                <br />
                <p>Volunteering at an animal shelter is a deeply rewarding experience that allows individuals to make a tangible difference in the lives of animals. Volunteers assist with feeding, cleaning, walking dogs, or simply spending time with animals to provide them with companionship. Their efforts not only improve the well-being of the animals but also support the shelter’s operations. Additionally, volunteering raises awareness about animal welfare issues and inspires communities to take action. It’s a meaningful way to give back while building a compassionate connection with animals in need.</p>
            </div>
        </div>
    );
})