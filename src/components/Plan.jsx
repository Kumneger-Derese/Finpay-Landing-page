import {HiArrowUpRight} from "react-icons/hi2";

const Plan = () => {

    return (
        <div id={'pricing'} className={'mb-32 md:mx-12 mx-8'}>
            <p className={'text-primary text-center mb-4'}>CHOOSE PLAN</p>

            <div className={'flex flex-col sm:flex-row gap-12 items-center justify-center'}>
                {/*Card Plus*/}
                <div
                    className={`bg-gray-100 rounded-lg transition duration-300  border-2 border-transparent  hover:border-base
                 w-80 sm:w-96 p-8`}>
                    <h1 className={'font-bold font-primary text-base text-4xl mb-16'}>Plus</h1>
                    <div className={'flex justify-between items-center dark:text-base'}>
                        <p>£2.99/month</p>
                        <HiArrowUpRight size={20} strokeWidth={1}/>
                    </div>
                </div>

                {/*Card Premium*/}
                <div
                    className={`bg-linear-150 from-primary to-base rounded-lg text-light w-80 sm:w-96 p-8`}>
                    <h1 className={'font-bold font-primary  text-4xl mb-16'}>Premium</h1>
                    <div className={'flex justify-between items-center'}>
                        <p>£6.99/month</p>
                        <HiArrowUpRight size={20} strokeWidth={1}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;