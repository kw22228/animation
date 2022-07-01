import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import ScrollTriggerProxy from './animation/gsap/ScrollTriggerProxy';

function App() {
    const containRef = useRef(null);

    return (
        <>
            <BrowserRouter>
                <LocomotiveScrollProvider //
                    options={{
                        smooth: true,
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
