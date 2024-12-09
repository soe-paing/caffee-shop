import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './hero.css'; // Add your styles here
import Btn1 from '../../components/buttons/Btn1';


const Hero = ({ src, speed = 8000, switchSpeed = 800, interval = 8000, autoplay = true, bullets = true, overlay = 'plain' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState('');
  const [playing, setPlaying] = useState(autoplay);
  const timerRef = useRef(null);
  const numSlides = src.length;

  useEffect(() => {
    
    if (playing) {
      startAutoPlay();
      setTimeout(() => {
        setActive('active');
      }, 10);
    } else {
      setActive('active');
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [playing, active, currentSlide]);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  const jumpToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id='home' className={`zoom-slider ${overlay ? `overlay-${overlay}` : ''}`}>
      <div className="slides">
        {src.map((data, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? active : ''}`}
            style={{
              backgroundImage: `url(${data.bgImg})`,
              transition: `opacity ${switchSpeed}ms`,
            }}
          ></div>
        ))}
      </div>
      {src.map((data, index) => (
        <div key={index} className={`quote ${index === currentSlide ? active : ''}`}>
          <img src={data.image} alt="quoteImg" />
          <p>{data.quote}</p>
          <Btn1 rounded={true} size='large'>Taste Coffee</Btn1>
        </div>
      ) )}
      {bullets && (
        <div className="bullets">
          {src.map((_, index) => (
            <div
              key={index}
              className={`bullet ${index === currentSlide ? active : ''}`}
              onClick={() => jumpToSlide(index)}
            ></div>
          ))}
        </div>
      )}
      <button className="prev" onClick={prevSlide}><i className="fas fa-arrow-left"></i></button>
      <button className="next" onClick={nextSlide}><i className="fas fa-arrow-right"></i></button>
    </section>
  );
};

Hero.propTypes = {
  src: PropTypes.arrayOf(PropTypes.object).isRequired,
  speed: PropTypes.number,
  switchSpeed: PropTypes.number,
  interval: PropTypes.number,
  autoplay: PropTypes.bool,
  bullets: PropTypes.bool,
  overlay: PropTypes.oneOf(['false', 'plain', 'dots']),
};

export default Hero;
