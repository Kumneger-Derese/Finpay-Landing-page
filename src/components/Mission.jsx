import React, {useRef} from 'react';
import {missionData} from "../constant/mission.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Mission = () => {

    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#mission-list',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
        tl.from('#mission-list', {
            y: -20,
            opacity: 0,
            stagger: 0.4,
            duration: 1,
            ease: 'back.inOut',
        })
    }, {scope: containerRef})

    return (
        <div id={'learn'} ref={containerRef} className={'flex flex-col mb-12 pt-16'}>
            <div className={'flex flex-col justify-center items-center mb-16'}>
                <p className={'text-primary'}>OUR MISSION</p>
                <h1 className={'font-bold text-3xl font-primary mb-4 text-center'}>
                    We've helped innovative companies
                </h1>
                <p className={'text-center md:w-2/5'}>Hundreds of all sizes and across all industries
                    have made a big improvements with us.</p>
            </div>

            {/*Mission List*/}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-8`}>
                {
                    missionData.map(mission => (
                        <div id={'mission-list'} key={mission.id} className={'flex flex-col gap-y-4'}>
                            <h1 className={'font-bold font-primary text-5xl'}>{mission.number}</h1>
                            <p className={'text-gray-700 dark:text-gray-300'}>{mission.title}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Mission;