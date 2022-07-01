import React from 'react';
import * as s from './Loader.style';
import { motion } from 'framer-motion';
import { svgPathVariants, textVarinats } from '../../animation/variants/loaderVariants';

const Loader = () => {
    return (
        <s.Container
            initial={{
                y: 0,
                opacity: 1,
            }}
            exit={{
                y: '100%',
                opacity: 0,
            }}
            transition={{
                duration: 2,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="none"
            >
                <g>
                    <motion.path //
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        variants={svgPathVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </g>
            </svg>
            <s.Text variants={textVarinats} initial="hidden" animate="visible">
                Wibe Studio
            </s.Text>
        </s.Container>
    );
};

export default Loader;
