import React from 'react';

const DrumKit = ({ letter, sound, isActive, play }) => {
    return (
        <div 
            className={`drum flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 ${isActive ? 'from-pink-600 to-yellow-600 scale-110' : 'hover:from-pink-400 to-yellow-400'} cursor-pointer transition transform duration-200 ease-out shadow-lg hover:shadow-2xl m-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36`}
            onClick={play}
        >
            <div className="key text-white font-bold text-lg md:text-xl lg:text-2xl"> {letter} </div>
        </div>
    );
};

export default DrumKit;
