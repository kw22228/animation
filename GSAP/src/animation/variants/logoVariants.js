export const svgPathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
        },
    },
};

export const textVarinats = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: -5,

        transition: {
            duration: 2,
            delay: 2,
            ease: 'easeInOut',
        },
    },
};
