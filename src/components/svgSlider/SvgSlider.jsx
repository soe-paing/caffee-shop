import { useEffect, useState } from 'react';
import './svgSlider.css';

const SvgSlider = ({src, duriation=8000, slideSpeed=10}) => {

    const [annimationValue, setAnnimationValue] = useState(0); //For the slide annimation of ractangle position
    const [activeImgArry, setActiveImgArry] = useState(src) //Dynamic Sort Image
    const rectangles = [ //For The Position of x and the height of rantangle
        { x: 160, height: "0%" },
        { x: 150, height: "20%" },
        { x: 130, height: "40%" },
        { x: 155, height: "60%" },
        { x: 120, height: "80%" },
    ];

    useEffect(() => {  
        // For the Sorting image and rectangles position of annimation slide every 8s.
        const intervalTwo = setInterval(() => { 
            setActiveImgArry(prevArray => {
                let swap = prevArray[0];
                prevArray.shift();
                prevArray.push(swap);
                return prevArray;
            })
            setAnnimationValue(0);
        }, duriation);
        
        return () => clearInterval(intervalTwo); // Cleanup intervals on component unmount
    }, [activeImgArry, src]);

    useEffect(() => {
        // For playing annimation of rectangles
        const intervalId = setInterval(() => {
            setAnnimationValue(prevValue => (prevValue < 250 ? prevValue + 1 : 250));
        }, slideSpeed);
        
        return () => clearInterval(intervalId) // Cleanup intervals on component unmount
    }, []);


    return (
        <div className="cd-slider-wrapper">
            <svg viewBox="0 0 1200 800">
                <title>Aimated SVG</title>
                <defs>
                    <mask id='sp-0' x="0" y="0" width="100%" height="100%">
                        {rectangles.map((react, index) => (
                            <rect
                                key={index}
                                x={ `${0 - annimationValue}%`}
                                y={react.height}
                                width="170%" 
                                height="20.2%" 
                                fill="#fff">
                            </rect>
                        ))}
                    </mask>
                    <mask id='sp-1' x="0" y="0" width="100%" height="100%">
                        {rectangles.map((react, index) => (
                            <rect
                                key={index}
                                x={react.x - annimationValue < 0 ? '0%' : `${react.x - annimationValue}%`}
                                y={react.height}
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
                        mask={`url(#sp-${index == activeImgArry.length - 1 ? 1 : 0})`}>
                    </image>
                ) )}
            </svg>
        </div>
    )
}

export default SvgSlider;