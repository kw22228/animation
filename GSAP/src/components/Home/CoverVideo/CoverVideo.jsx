import React from 'react';
import * as s from './CoverVideo.style';
import MainVideo from '../../../assets/Walking Girl.mp4';
import { itemVarinats, videoTitleVarinats } from '../../../animation/variants/videoVariants';
import { motion } from 'framer-motion';

const CoverVideo = () => {
    return (
        <s.VideoContainer>
            <s.DarkOverlay />
            <s.Title variants={videoTitleVarinats} initial="hidden" animate="show">
                <div>
                    <motion.h1
                        variants={itemVarinats}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-delay="0.13"
                    >
                        W
                    </motion.h1>
                    <motion.h1
                        variants={itemVarinats}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-delay="0.09"
                    >
                        i
                    </motion.h1>
                    <motion.h1
                        variants={itemVarinats}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-delay="0.06"
                    >
                        b
                    </motion.h1>
                    <motion.h1
                        variants={itemVarinats}
                        data-scroll
                        data-scroll-speed="4"
                        data-scroll-delay="0.04"
                    >
                        e
                    </motion.h1>
                </div>
                <motion.h2
                    variants={itemVarinats}
                    data-scroll
                    data-scroll-speed="4"
                    data-scroll-delay="0.04"
                >
                    Inspire. Create. Belive
                </motion.h2>
            </s.Title>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </s.VideoContainer>
    );
};

export default CoverVideo;
