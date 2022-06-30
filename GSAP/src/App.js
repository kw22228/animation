import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
                    <main data-scroll-container ref={containRef}>
                        <MainPage />
                    </main>
                </LocomotiveScrollProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
