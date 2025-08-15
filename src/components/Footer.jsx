import React from 'react';
import {FaFacebook, FaLinkedin, FaXTwitter} from "react-icons/fa6";
import {footerData} from "../constant/footer.js";

const Footer = () => {
    return (
        <div className={'px-8 py-8 '}>

            <section className={' grid grid-cols-2 sm:grid-cols-4 justify-between gap-y-6'}>
                <div className={'flex flex-col gap-y-2 flex-1/6'}>
                    <h1 className={'text-2xl font-bold font-primary'}>FinPay</h1>
                    {/*Social Media*/}
                    <div className={'flex gap-x-3 items-center'}>
                        <FaXTwitter size={16}/>
                        <FaLinkedin size={16}/>
                        <FaFacebook size={16}/>
                    </div>
                </div>

                {
                    footerData.map((item) => (
                        <div key={item.id}>
                            <h1 className={'font-bold text-base text-2xl mb-3'}>{item.title}</h1>
                            <ul className={'flex flex-col gap-y-2'}>
                                {
                                    item.lists.map((list,i) => (
                                        <li key={list}>{list}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </section>


            {/*</section>*/}
            <hr className={'text-slate-400 my-6'}/>
            <section className={'text-center'}>
                <p>&copy;Finpay 2025. All Rights Reserved.</p>
            </section>
        </div>
    );
};

export default Footer;