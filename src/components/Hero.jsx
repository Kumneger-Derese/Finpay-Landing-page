import React, {useRef} from 'react';
import {HiArrowUpRight,} from "react-icons/hi2";
import { SiMagento, SiVisa,} from "react-icons/si";
import {FaCreditCard} from "react-icons/fa6";
import {BsBank2} from "react-icons/bs";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

import klarna from '../assets/klarna.png'
import coinbase from '../assets/coinbase.png'
import instacart from '../assets/instacart.png'

gsap.registerPlugin(useGSAP, SplitText)

const Hero = () => {
    const [selected, setSelected] = React.useState('credit');
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const split = new SplitText(titleRef.current, {type: 'lines'});
        gsap.from(split.lines, {ease: 'power2.inOut', y: 20, duration: 1, opacity: 0, stagger: 0.2})
        gsap.from('.heading-content ', {
            ease: 'power2.inOut', y: 20, duration: 1.5, opacity: 0, stagger: 0.2
        })

    }, {scope: containerRef})

    return (
        <div id={'products'} ref={containerRef} className={'flex flex-col sm:flex-row gap-y-20 items-center mb-32 pt-20'}>
            {/*Left Section*/}
            <section className={`flex-1/2 flex flex-col gap-y-4`}>
                <h1 ref={titleRef} className={'font-primary font-black text-5xl mb-1'}>
                    Get paid early <br className={'hidden sm:block'}/> save automatically <br
                    className={'hidden sm:block'}/> all your pay.
                </h1>

                <p className={'mb-8 heading-content text-gray-600 dark:text-gray-400'}>
                    Supports small businesses with simple invoicing,
                    powerful integrations, and cash flow management tools.
                </p>

                {/*hero input field*/}
                <div className={'w-full sm:w-5/6 items-center flex relative mb-3'}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Bussiness email"
                        className={'rounded-lg placeholder-slate-400 p-3 w-full border outline-none focus:outline-none border-primary'}
                    />

                    <button className={`lg:px-4 px-2 py-2 rounded-lg text-white gap-x-2 font-medium
                         bg-primary hover:bg-secondary transition-colors duration-300 absolute right-1 flex items-center`}>
                        Get started <HiArrowUpRight strokeWidth={1}/>
                    </button>
                </div>

                {/*Icons*/}
                <div className={'flex items-center gap-x-6'}>
                    <img src={klarna}  className={'w-12 dark:invert'} alt={'sponsor image 1'}/>
                    <img src={coinbase}  className={'w-20 dark:invert'} alt={'sponsor image 1'}/>
                    <img src={instacart}  className={'w-20 invert dark:invert-0'} alt={'sponsor image 1'}/>

                </div>

            </section>

            {/*Right Section*/}
            <section className={`flex-1/2 flex flex-col items-center justify-center dark:text-base`}>

                {/*Big card*/}
                <div
                    className={'flex relative flex-col p-4 border border-slate-300 gap-y-2 bg-white shadow rounded-lg w-80'}>
                    {/*Header*/}
                    <div className={'flex gap-x-2 items-center '}>
                        <SiMagento size={32} className={'text-primary '}/>
                        <div className={'flex flex-col'}>
                            <h2 className={'font-bold'}>Dipa Inhouse</h2>
                            <p className={'text-sm'}>dipainhouse@gmail.com</p>
                        </div>
                    </div>

                    {/*Details*/}
                    <div className={`flex flex-col border border-slate-300 rounded-lg p-2
                         gap-y-0.5 `}>
                        <p className={'text-sm'}>Invoice</p>
                        <h2 className={'font-bold font-primary text-xl'}>$1,876,580</h2>
                        <p className={'text-sm'}>April 21, 2025</p>
                    </div>

                    {/*Input Container*/}
                    <div className={'flex flex-col gap-3 items-center'}>
                        {/*Credit card input container*/}
                        <div className={'flex items-center relative w-full'}>
                            <label htmlFor="credit" className={`w-full appearance-none transition duration-300 px-4 py-5 rounded-lg border-2 
                                 ${selected === 'credit' ? 'border-primary' : 'border-slate-300'}`}>
                                <input
                                    type="radio" id="credit"
                                    checked={selected === 'credit'}
                                    value={'credit'}
                                    onChange={() => setSelected('credit')}
                                    className={`hidden peer`}
                                />
                            </label>


                            {/*Credit Card*/}
                            <div className={'absolute left-2 text-base'}>
                                <FaCreditCard size={20}/>
                            </div>

                            {/*Credit Detail*/}
                            <div className={'absolute left-10'}>
                                <p className={'font-semibold text-sm'}>Credit Card</p>
                            </div>

                            {/*Radio circle*/}
                            <div className={'absolute right-2.5'}>
                                <div className={'size-5 flex items-center transition duration-300 justify-center border rounded-full bordbg-primary'}>
                                    <p className={`size-2.5 ${selected === 'credit' && 'bg-primary'} rounded-full`}/>
                                </div>
                            </div>
                        </div>

                        {/*Bank Account input container*/}
                        <div className={'flex items-center relative w-full'}>
                            <label htmlFor="bank" className={`w-full duration-300 transition appearance-none px-4 py-5 rounded-lg border-2 
                                 ${selected === 'bank' ? 'border-primary' : 'border-slate-300'}`}>
                                <input
                                    type="radio" id="bank"
                                    checked={selected === 'bank'}
                                    value={'bank'}
                                    onChange={() => setSelected('bank')}
                                    className={`hidden peer:`}
                                />
                            </label>


                            {/*Bank Icon*/}
                            <div className={'absolute left-2'}>
                                <BsBank2 size={20} className={'text-base'}/>
                            </div>

                            {/*Bank Detail*/}
                            <div className={'absolute left-10'}>
                                <p className={'font-semibold text-sm'}>Bank Account</p>
                            </div>

                            {/*Radio circle*/}
                            <div className={'absolute right-2.5'}>
                                <div className={'size-5 flex items-center transition duration-300 justify-center border rounded-full bordbg-primary'}>
                                    <p className={`size-2.5 ${selected === 'bank' && 'bg-primary'} rounded-full`}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className={'font-bold w-full py-2 hover:bg-primary transition duration-300 rounded-lg text-white bg-secondary'}>Pay
                    </button>

                    {/*Small ---------- Card*/}
                    <div className={'rounded-xl w-40 absolute -right-4 sm:-right-8 -top-5 bg-primary text-white'}>
                        <div className={'p-3'}>
                            <p className={'text-sm  mb-1'}>Credit card</p>
                            <p className={'text-lg font-semibold mb-16'}>234 **** ****</p>
                        </div>


                        <div className={'bg-secondary rounded-b-xl p-3 text-white flex justify-between'}>
                            <SiVisa size={32}/>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Hero;