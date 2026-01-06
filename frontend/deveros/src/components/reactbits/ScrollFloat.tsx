import React, { useEffect, useMemo, useRef, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ScrollFloat.css'; // Import the new CSS

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
                                                     children,
                                                     scrollContainerRef,
                                                     animationDuration = .5,
                                                     ease = 'back.inOut(2)',
                                                     scrollStart = 'top bottom', // Trigger when top of text hits bottom of viewport
                                                     scrollEnd = 'bottom bottom',
                                                     stagger = 0.03
                                                 }) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index) => (
            <span className="scroll-float-char" key={index}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        const charElements = el.querySelectorAll('.scroll-float-char');

        gsap.fromTo(
            charElements,
            {
                willChange: 'opacity, transform',
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
            },
            {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    // REMOVED 'scrub: true'
                    // Scrub requires scroll distance. Since this is at the bottom,
                    // we just want it to play once when it appears.
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <h2 ref={containerRef} className="scroll-float-container">
            <span className="scroll-float-text">{splitText}</span>
        </h2>
    );
};

export default ScrollFloat;