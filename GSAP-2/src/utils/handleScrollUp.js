const handleScrollUp = (id, setterFunc = null) => {
    const element = document.querySelector(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });

    if (setterFunc) {
        setterFunc(prev => !prev);
    }
};

export default handleScrollUp;
