import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import * as s from './NavBar.style';

const NavBar = () => {
    const [menuclick, setMenuClick] = useState(false);

    const { scroll } = useLocomotiveScroll();

    const handleSCroll = id => {
        let element = document.querySelector(id);
        setMenuClick(prev => !prev);
        scroll.scrollTo(element, {
            offset: '0',
            duration: '2000',
            easing: [0.25, 0.0, 0.35, 1.0],
        });
    };
    return (
        <s.NavContinaer
            menuclick={String(menuclick)}
            initial={{
                y: '-100%',
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 1.5,
                delay: 4,
            }}
        >
            <s.MenuItems
                drag
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                    left: 0,
                    right: 0,
                }}
                dragElastic={0.02}
                dragSnapToOrigin
            >
                <s.MenuBtn onClick={() => setMenuClick(prev => !prev)}>Menu</s.MenuBtn>
                <s.MenuItem
                    onClick={() => handleSCroll('#home')}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9,
                        y: 0,
                    }}
                >
                    Home
                </s.MenuItem>
                <s.MenuItem
                    onClick={() => handleSCroll('.about')}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9,
                        y: 0,
                    }}
                >
                    about
                </s.MenuItem>
                <s.MenuItem
                    onClick={() => handleSCroll('#shop')}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9,
                        y: 0,
                    }}
                >
                    shop
                </s.MenuItem>
                <s.MenuItem
                    onClick={() => handleSCroll('#newArrival')}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9,
                        y: 0,
                    }}
                >
                    new arrival
                </s.MenuItem>
            </s.MenuItems>
        </s.NavContinaer>
    );
};

export default NavBar;
