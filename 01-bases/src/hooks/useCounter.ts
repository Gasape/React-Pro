import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CounterHookProps { 
    initialState: number,
    Maximum_Count: number
}
export const useCounter = ( { initialState, Maximum_Count } : CounterHookProps ) => {
    const [counter, setCounter] = useState(initialState);

    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline() );

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, Maximum_Count));
    }

    useLayoutEffect(() => {
    
        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, {
            y: -10,
            duration: 0.2,
            ease: "ease.out",
        }).to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
        .pause();

    }, [])

    useEffect(() => {
        tl.current.play(0);
    }, [counter]);

  return {
    elementToAnimate,
    counter,
    handleClick,
  }
}