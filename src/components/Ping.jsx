import {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP)

const Ping = ({pingClass,pingContainer}) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.to(['.ping1', '.ping2', '.ping3'], {
            scale: 2,
            opacity: 0,
            duration: 2,
            repeat: -1,
            ease: 'Power1.out',
            stagger:{
                each:0.5,
                repeat:-1,
            }
        })
    }, {scope: containerRef})

    return (
        <div ref={containerRef} className={''}>
            <div className={`border ${pingContainer} rounded-full `}>
                <div className={`ping1 ${pingClass} opacity-80 rounded-[100%]`}/>
            </div>
        </div>

    );
};

export default Ping;