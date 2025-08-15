import {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import Ping from "./Ping.jsx";

gsap.registerPlugin(useGSAP, SplitText);

const AnimatedTitle = ({children, className, pingClass,pingContainer}) => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(() => {
        const split = new SplitText(titleRef.current, {type: 'words'})
        gsap.from(split.words, {
            y: 20,
            duration: 1,
            stagger: 0.2,
            opacity: 0,
        })
    }, {scope: containerRef})

    return (
        <div ref={containerRef}  className={'flex items-center space-x-3 will-change-transform mb-4'}>
           <span> <Ping pingClass={pingClass} pingContainer={pingContainer}/></span>   <h1 ref={titleRef} className={`text-4xl font-bold  ${className}`}>{children}</h1>
        </div>
    );
};

export default AnimatedTitle;