import React, { useEffect, useState } from 'react'


const images = [
    "assets/img/brand/b-2-1.png",
    "assets/img/brand/b-2-2.png",
    "assets/img/brand/b-2-3.png",
    "assets/img/brand/b-2-4.png",
    "assets/img/brand/b-2-5.png",
    "assets/img/brand/b-2-6.png",
    "assets/img/brand/b-2-1.png",
  ];
const ClientCarousel = () => {
      const [clientCarousel, setClientCarousel] = useState(0);

      useEffect(() => {
        const intervalId = setInterval(() => {
          // Calculate the next index
          const nextIndex = (clientCarousel + 1) % images.length;
          setClientCarousel(nextIndex);
        }, 3000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [clientCarousel]);
    
  return (
    <>
 <div className="bg-theme space-extra" id="clients">
        <div className="container">
          <div
            className="row vs-carousel text-center slick-initialized slick-slider"
            data-slide-show={6}
            data-lg-slide-show={4}
            data-md-slide-show={3}
            data-sm-slide-show={2}
            data-xs-slide-show={2}
          >
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: images.length * 216, // Adjust the width based on the number of images
                  transform: `translate3d(-${clientCarousel * 216}px, 0px, 0px)`,
                  transition: 'transform 1000ms ease 0',
                }}
              >
                {images.map((image, index) => (
                  <div
                    className="col-auto slick-slide"
                    style={{ width: 216 }}
                    tabIndex={-1}
                    key={index}
                    aria-hidden={index !== clientCarousel}
                  >
                    <img src={image} alt="brand" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientCarousel
