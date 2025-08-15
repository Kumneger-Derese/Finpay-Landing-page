import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import React, {useRef} from 'react';
import {featureData} from "../constant/feature.js";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Feature = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#feature-list',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
        tl.from('#feature-list', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'back.inOut',
        })
    }, {scope: containerRef})

    return (
        <div ref={containerRef} className={'flex flex-col bg-white dark:bg-primary/40 p-8 rounded-lg mb-32 shadow'}>
            <section className={'flex flex-col sm:flex-row gap-y-4 justify-between items-center mb-16'}>
                <div className={'flex-1/2'}>
                    <p className={'text-primary'}>FUTURE PAYMENT</p>
                    <h1 className={'font-bold font-primary text-3xl'}>Experience that grows with your scale.</h1>
                </div>

                <div className={'flex-1/2'}>
                    <p>
                        Design a financial operating system that works for
                        your business and streamlined cash flow management.
                    </p>
                </div>
            </section>

            <section className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mb-12'}>
                {
                    featureData.map(({id, content, title, icon: Icon}) => (
                        <div key={id} id={'feature-list'} className={'flex flex-col gap-y-2'}>
                            <Icon size={36} className={'text-primary'}/>
                            <h1 className={'font-bold text-2xl'}>{title}</h1>
                            <p className={'text-gray-700 dark:text-gray-400'}>{content}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default Feature;