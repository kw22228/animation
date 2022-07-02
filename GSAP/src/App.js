import { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import ScrollTriggerProxy from './animation/gsap/ScrollTriggerProxy';
import Loader from './components/Loader/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
    const containRef = useRef(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, []);
    return (
        <>
            <BrowserRouter>
                <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
                <LocomotiveScrollProvider //
                    options={{
                        smooth: true,
                        smartphone: {
                            smooth: true,
                        },
                        tablet: {
                            smooth: true,
                        },
                    }}
                    watch={
                        [
                            //
                        ]
                    }
                    containerRef={containRef}
                >
                    <ScrollTriggerProxy />
                    <main className="Main" data-scroll-container ref={containRef}>
                        <MainPage />
                    </main>
                </LocomotiveScrollProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
