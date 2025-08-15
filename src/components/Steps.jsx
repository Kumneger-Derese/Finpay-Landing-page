import React, {useRef} from 'react';
import {stepsData} from "../constant/steps.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Steps = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#step-list',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
        tl.from('#step-list', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'back.inOut',
        })
    }, {scope: containerRef})

    return (
        <div ref={containerRef} className={'flex flex-col gap-y-8 sm:px-8 py-16 mx-8 my-8 rounded-lg '}>
            <div className={'flex flex-col mb-16'}>
                <p className={'text-primary'}>STEPS</p>
                <h1 className={'text-light text-3xl font-primary md:w-3/5'}>
                    Maximize your returns with a
                    Reserve account that generates.
                </h1>
            </div>

        {/*steps list*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'}>
                {
                    stepsData.map((step) => (
                        <div key={step.id} id={'step-list'} className={'flex flex-col justify-between bg-[#0B3A4F] rounded-lg p-4 gap-y-2'}>
                            <p className={'text-8xl mask-b-from-1 mask-b-to-70%  font-secondary font-bold text-gray-400'}>{step.number}</p>
                            <h1 className={'text-xl font-bold text-light'}>{step.title}</h1>
                            <p className={'text-gray-400'}>{step.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Steps;