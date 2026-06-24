// import React from 'react';

// const HeadingH1 = ({ children, leading, xlText, txtColor }) => {
//     const style = {
//         ...(leading ? { lineHeight: leading } : {}),
//         ...(xlText ? { fontSize: xlText } : {}),
//         ...(txtColor ? { color: txtColor } : {}),
//     };

//     return (
//         <h1
//             className="font-falcon font-bold text-center mb-2 md:mb-4 tracking-tight text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]"
//             style={style}
//         >
//             {children}
//         </h1>
//     );
// };

// export default HeadingH1;

// HeadingH1.jsx



import React from 'react';

const HeadingH1 = ({ children, leading, xlText, txtColor, parts }) => {
    const style = {
        ...(leading ? { lineHeight: leading } : {}),
        ...(xlText ? { fontSize: xlText } : {}),
        ...(txtColor ? { color: txtColor } : {}),
    };

    return (
        <h1
            className="font-falcon font-bold tracking-tight text-[40px] sm:text-[64px] md:text-[80px] lg:text-[100px]"
            style={style}
        >
            {parts ? (
                parts.map((part, i) => (
                    <span key={i} style={{ color: part.color, fontSize: part.size || undefined }}>
                        {part.text}
                    </span>
                ))
            ) : (
                children
            )}
        </h1>
    );
};

export default HeadingH1;