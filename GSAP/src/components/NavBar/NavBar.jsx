import React, { useState } from 'react';
import * as s from './NavBar.style';

const NavBar = () => {
    const [menuclick, setMenuClick] = useState(false);

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
                delay: 2,
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
