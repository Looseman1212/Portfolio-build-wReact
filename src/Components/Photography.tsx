import { useState, useEffect, useRef } from "react";

import "../scss/Photography.scss";
import vertical1 from "../assets/photography-images/vertical1.jpg";
import vertical2 from "../assets/photography-images/vertical2.jpg";
import vertical3 from "../assets/photography-images/vertical3.jpg";
import vertical4 from "../assets/photography-images/vertical4.jpg";
import vertical5 from "../assets/photography-images/vertical5.jpg";
import vertical6 from "../assets/photography-images/vertical6.jpg";
import vertical7 from "../assets/photography-images/vertical7.jpg";
import horizontal1 from "../assets/photography-images/horizontal1.jpg";
import horizontal2 from "../assets/photography-images/horizontal2.jpg";
import horizontal3 from "../assets/photography-images/horizontal3.jpg";
import horizontal4 from "../assets/photography-images/horizontal4.jpg";
import horizontal5 from "../assets/photography-images/horizontal5.jpg";
import horizontal6 from "../assets/photography-images/horizontal6.jpg";
import horizontal7 from "../assets/photography-images/horizontal7.jpg";

function Photography() {
  const [carouselIsVisible, setCarouselIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCarouselIsVisible(entry.isIntersecting);
    });

    const currentCarouselRef = carouselRef.current;

    if (currentCarouselRef) {
      observer.observe(currentCarouselRef);
    }
    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef);
      }
    };
  }, [carouselIsVisible]);

  return (
    <div className="photography-container">
      <div className="heading-container">
        <div className="heading-box">
          <h1>Photography</h1>
          <p>Here are some photographs of mine, all taken on 35mm film</p>
          <p className="carousel-instruction">
            Hover mouse over to stop the scrolling :)
          </p>
        </div>
      </div>
      <div className="carousel-container" ref={carouselRef}>
        <div
          className={
            carouselIsVisible ? "images-box images-box-animate" : "images-box"
          }
        >
          <img src={vertical1} alt="aaa" className="carousel-image" />
          <img src={horizontal1} alt="bbb" className="carousel-image" />
          <img src={vertical2} alt="ccc" className="carousel-image" />
          <img src={horizontal2} alt="ddd" className="carousel-image" />
          <img src={vertical3} alt="eee" className="carousel-image" />
          <img src={horizontal3} alt="fff" className="carousel-image" />
          <img src={vertical4} alt="aaa" className="carousel-image" />
          <img src={horizontal4} alt="bbb" className="carousel-image" />
          <img src={vertical5} alt="ccc" className="carousel-image" />
          <img src={horizontal5} alt="ddd" className="carousel-image" />
          <img src={vertical6} alt="eee" className="carousel-image" />
          <img src={horizontal6} alt="fff" className="carousel-image" />
          <img src={vertical7} alt="eee" className="carousel-image" />
          <img src={horizontal7} alt="fff" className="carousel-image" />
          <img src={vertical1} alt="aaa" className="carousel-image" />
          <img src={horizontal1} alt="bbb" className="carousel-image" />
          <img src={vertical2} alt="ccc" className="carousel-image" />
          <img src={horizontal2} alt="ddd" className="carousel-image" />
          <img src={vertical3} alt="eee" className="carousel-image" />
          <img src={horizontal3} alt="fff" className="carousel-image" />
          <img src={vertical4} alt="aaa" className="carousel-image" />
          <img src={horizontal4} alt="bbb" className="carousel-image" />
          <img src={vertical5} alt="ccc" className="carousel-image" />
          <img src={horizontal5} alt="ddd" className="carousel-image" />
          <img src={vertical6} alt="eee" className="carousel-image" />
          <img src={horizontal6} alt="fff" className="carousel-image" />
          <img src={vertical7} alt="eee" className="carousel-image" />
          <img src={horizontal7} alt="fff" className="carousel-image" />
        </div>
      </div>
    </div>
  );
}

export default Photography;
