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
    },
    visible: {
        opacity: 1,

        transition: {
            duration: 1,
            ease: 'easeInOut',
            yoyo: Infinity, // Repeats infinite times
        },
    },
};
