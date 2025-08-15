import React from 'react';
import {CiBank} from "react-icons/ci";
import XImage from '../assets/bank.png'
import {BiTransfer} from "react-icons/bi";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {HiChevronDown} from "react-icons/hi2";

const data = [
    {name: 'Jan', value: '100'},
    {name: 'Feb', value: '180'},
    {name: 'Mar', value: '230'},
    {name: 'Apr', value: '300'},
    {name: 'May', value: '340'},
    {name: 'Jun', value: '400'},
]

const Statics = () => {

    return (
        <div id={'customers'} className={'flex flex-col gap-y-8 bg-white dark:bg-[#0B3A4F] px-4 sm:px-16 py-8'}>
            <div className={'flex flex-col justify-center items-center mb-16'}>
                <p className={'text-primary'}>WHY US</p>
                <h1 className={'font-bold font-primary text-3xl text-center'}>Why they prefer Finpay</h1>
            </div>

            {/*card container*/}
            <section className={'flex flex-col sm:flex-row  gap-12 justify-between md:mx-12'}>
                {/*First card*/}
                <div className={'flex flex-1 flex-col bg-gray-100 dark:bg-base p-6 rounded-lg'}>
                    <h1 className={'text-6xl font-bold mb-8 text-primary '}>3K+</h1>
                    <p className={'font-semibold text-lg text-gray-600 dark:text-light'}>Businesses already running on
                        Finpay</p>
                </div>

                {/*Second card*/}
                <div className={'flex flex-1 flex-col text-primary bg-gray-100 dark:bg-base p-6 rounded-lg'}>
                    <p className={'font-semibold text-lg mb-12 text-base dark:text-light'}>Instant Withdraw your funds
                        at any time</p>

                    <div className={'flex justify-between lg:mx-12 items-center'}>
                        <img src={XImage} alt={'x bank image'} className={'size-10 rounded-full'}/>

                        <BiTransfer size={36} className={'text-slate-600 dark:text-gray-400'}/>

                        <CiBank size={48} className={'text-secondary dark:text-light'}/>
                    </div>
                </div>
            </section>

            {/*long section*/}
            <section
                className={`flex flex-col sm:h-72 sm:flex-row justify-between gap-y-16 bg-gray-100 dark:bg-primary/50  rounded-lg 
                 text-primary md:mx-8 p-2 sm:p-8`}>

                <div className={'w-full sm:w-2/5 px-8 py-4'}>
                    <h1 className={'text-2xl font-bold mb-2 text-base dark:text-light'}>No asset volatility</h1>
                    <p className={'text-gray-500 dark:text-light'}>
                        Generate returns on your
                        cash reserves without making
                        any investments.
                    </p>
                </div>

                <div className={`w-full sm:w-3/5 h-60 mx-auto flex  
                 bg-white dark:bg-light  rounded-lg px-2 py-4 fle flex-col shadow-xl`}>
                    <div className={'mb-4 flex items-center justify-between px-2 text-base'}>
                        <div>
                            <p className={'text-sm'}>Summary</p>
                            <h1 className={'font-bold text-2xl'}>$1,876,580</h1>
                        </div>

                        <p className={'flex gap-x-1 items-center'}>
                            <span className={'text-sm'}>6 months</span>
                            <HiChevronDown/>
                        </p>
                    </div>
                    <ResponsiveContainer>
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id={'tealGradient'} x1={'0'} y1={'0'} x2={'0'} y2={'1'}>
                                    <stop offset={'0%'} stopColor={`#2a8e9e`}
                                          stopOpacity={0.7}/>
                                    <stop offset={'100%'} stopColor={`#2a8e9e`}
                                          stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip/>
                            <XAxis tickLine={false} stroke={`#2a8e9e`} strokeWidth={0.2}
                                   dataKey={'name'}
                                   className={''}/>
                            <Area dataKey={'value'} stroke={`#2a8e9e`} type={'monotone'}
                                  fill={'url(#tealGradient)'}/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </section>
        </div>
    );
};

export default Statics;