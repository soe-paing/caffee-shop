import { useEffect, useState } from 'react';
import './svgSlider.css';

const SvgSlider = ({src}) => {

    const [annimationValue, setAnnimationValue] = useState(0);
    const [activeImgArry, setActiveImgArry] = useState(src)
    const rectangleY = [
        { x: 160, y: "0%" },
        { x: 150, y: "20%" },
        { x: 130, y: "40%" },
        { x: 155, y: "60%" },
        { x: 120, y: "80%" },
    ];

    useEffect(() => {
        const intervalTwo = setInterval(() => {
            activeImgArry == src ? setActiveImgArry([src[1],src[0]]) : setActiveImgArry(src);
            setAnnimationValue(0);
        }, 8000);
        
        return () => clearInterval(intervalTwo); // Cleanup intervals on component unmount
    }, [activeImgArry, src]);

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setAnnimationValue(prevValue => (prevValue < 250 ? prevValue + 1 : 250));
        }, 10);
        
        return () => clearInterval(intervalId) // Cleanup intervals on component unmount
    }, []);


    return (
        <div className="cd-slider-wrapper">
            <svg viewBox="0 0 1200 800">
                <title>Aimated SVG</title>
                <defs>
                    <mask id='sp-0' x="0" y="0" width="100%" height="100%">
                        {rectangleY.map((react, index) => (
                            <rect
                                key={index}
                                x={ `${0 - annimationValue}%`}
                                y={react.y}
                                width="170%" 
                                height="20.2%" 
                                fill="#fff">
                            </rect>
                        ))}
                    </mask>
                    <mask id='sp-1' x="0" y="0" width="100%" height="100%">
                        {rectangleY.map((react, index) => (
                            <rect
                                key={index}
                                x={react.x - annimationValue < 0 ? '0%' : `${react.x - annimationValue}%`}
                                y={react.y}
                                width="100%" 
                                height="20.2%" 
                                fill="#fff">
                            </rect>
                        ))}
                    </mask>
                </defs>
                {activeImgArry.map((img, index) => (
                    <image 
                        key={index}
                        height='100%' 
                        width="100%" 
                        xlinkHref={img}
                        mask={`url(#sp-${index})`}>
                    </image>
                ) )}
            </svg>
        </div>
    )
}

export default SvgSlider;