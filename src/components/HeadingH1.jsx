import React from 'react';

const HeadingH1 = ({ children, leading, xlText, txtColor, parts, letterSpacing }) => {
    const style = {
        ...(leading ? { lineHeight: leading } : {}),
        ...(xlText ? { fontSize: xlText } : {}),
        ...(txtColor ? { color: txtColor } : {}),
        ...(letterSpacing ? { letterSpacing: letterSpacing } : {}),
    };

    return (
        <h1
            className="font-falcon font-bold md:tracking-[-6px] tracking-tight text-[40px] sm:text-[64px] md:text-[80px] lg:text-[100px]"
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