import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-[60] shadow-lg">
            <div className="flex items-center justify-center gap-2">
                <span role="img" aria-label="construction">🚧</span>
                <p>Portfolio under construction - I'm still working on it!</p>
                <span role="img" aria-label="construction">🚧</span>
            </div>
        </div>
    );
};

export default Banner;
