import React from 'react';
// import { Framer } from './components/Framer';
// import { AnimatePre } from './components/AnimatePresence';
import GlobalStyle from './styles/global';
import { LayoutAnimation } from './components/LayoutAnimation';

function App() {
    return (
        <>
            <GlobalStyle />
            {/* <Framer /> */}
            {/* <AnimatePre /> */}
            <LayoutAnimation />
        </>
    );
}

export default App;
