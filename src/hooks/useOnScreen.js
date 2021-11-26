import { useEffect, useState } from 'react';

// const listObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) { return };
//         setInView(true);
//         observer.unobserve(entry.target);
//     });
// }, { root: null, rootMargin: '-10px' });

// listObserver.observe(itemRef.current);

function runtimeObserver(stateArg) {
    let rto;

    if (typeof window !== 'undefined') {
        rto = new IntersectionObserver(([entry], observer) => {
            if (!entry.isIntersecting) { return }

            observer.unobserve(entry.target);
            stateArg(true);
        }, { root: null, rootMargin: '-10px' });
    };

    return rto;
};

export default function useOnScreen(ref) {

    const [ isIntersecting, setIsIntersecting ] = useState(false);

    const itemObserver = runtimeObserver(setIsIntersecting);

    useEffect(() => {
        if (itemObserver === null) { return }
        
        itemObserver.observe(ref.current);

        return () => itemObserver.disconnect();
    }, [itemObserver, ref]);

    return isIntersecting;
};

// function itemObserver(setInView) {
//     let observer = null;

//     if (typeof window !== 'undefined') {
//         observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (!entry.isIntersecting) { return };
//                 console.log(entry.target);
//                 setInView(true);
//                 observer.unobserve(entry.target);
//             }, { root: null, rootMargin: '-10px' });
//         })
//     };

//     return observer;
// };

// export default function useObserver(target, setInView) {

//     useEffect(() => {
//         let observer;

//         if (itemObserver(setInView)) {
//             observer = itemObserver(setInView);
//             observer.observe(target);
//         }

//     }, [])

// };