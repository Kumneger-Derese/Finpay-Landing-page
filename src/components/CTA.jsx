import React from 'react';
import {HiArrowUpRight} from "react-icons/hi2";

const CTA = () => {
    return (
        <div className={'rounded-xl bg-linear-150 from-secondary  to-base/90 dark:from-primary p-12 flex flex-col items-center sm:flex-row gap-8 mb-20'}>
            {/*Cta details*/}
            <div className={'flex-1/2 text-light'}>
              <p className={'text-primary dark:text-gray-200'}>TRY IT NOW</p>
                <h1 className={'text-3xl font-bold font-primary mb-4'}>Ready to level up your payment process?</h1>
                <p className={'text-gray-300'}>
                    Supports small businesses with simple invoicing,
                    powerful integrations, and cash flow management tools.
                </p>
            </div>

            {/*Buttons*/}
            <div className={'flex-1/2 flex flex-col lg:flex-row items-center gap-6 justify-center h-full text-light'}>
                <button className={'px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/50'}>Get Started Now</button>
                <button className={'px-4 py-2 rounded-lg border border-light flex gap-x-2'}>
                    <span>Learn More</span>
                    <HiArrowUpRight className={''} size={20}/>
                </button>
            </div>
        </div>
    );
};

export default CTA;