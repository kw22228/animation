import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const ScrollToTop = lazy(() => import('../components/ScrollToTop/ScrollToTop'));

const Router = () => {
    return (
        <>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                    <Footer />
                    <ScrollToTop />
                </BrowserRouter>
            </Suspense>
        </>
    );
};

export default Router;
