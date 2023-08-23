import React, { useEffect, useState } from 'react';

const categoryImages = [
  "/assets/img/gallery/gal-9-1.jpg",
  "/assets/img/gallery/gal-9-2.jpg",
  "/assets/img/gallery/gal-9-3.jpg",
  "/assets/img/gallery/gal-9-4.jpg",
  "/assets/img/gallery/gal-9-5.jpg",
  // Add more image paths as needed
];

const CategoryCarousel = () => {
  const [categoryCarousel, setCategoryCarousel] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index
      const nextIndex = (categoryCarousel + 1) % categoryImages.length;
      setCategoryCarousel(nextIndex);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [categoryCarousel]);

  return (
    <>
      <div className="position-relative space-extra-bottom">
        <div className="gallery-shape1" />
        <div className="container-fluid">
          <div
            className="row gallery-slider1 vs-carousel slick-initialized slick-slider"
            data-slide-show={1}
            data-center-mode="true"
            data-xl-center-mode="true"
            data-ml-center-mode="true"
            data-lg-center-mode="true"
            data-md-center-mode="true"
            data-center-padding="477px"
            data-xl-center-padding="320px"
            data-ml-center-padding="200px"
            data-lg-center-padding="150px"
            data-md-center-padding="80px"
          >
            <div className="slick-list draggable" style={{ padding: '0px 200px' }}>
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: categoryImages.length * 919, // Adjust the width based on the number of images
                  transform: `translate3d(-${categoryCarousel * 919}px, 0px, 0px)`,
                  transition: 'transform 1000ms ease 0s',
                }}
              >
                {categoryImages.map((image, index) => (
                  <div
                    className={`col slick-slide ${index === categoryCarousel ? 'slick-current slick-active slick-center' : ''}`}
                    style={{ width: 919 }}
                    tabIndex={-1}
                    key={index}
                    aria-hidden={index !== categoryCarousel}
                  >
                    <div className="gallery-style2">
                      <div className="gallery-img">
                        <img src={image} alt="gallery" className='small-img' />
                      </div>
                      <div className="circle-btn style2">
                        <a href="gallery-details.html" className="btn-icon" tabIndex={-1}>
                          <i className="far fa-arrow-right" />
                        </a>
                        <div className="btn-text">
                          <svg viewBox="0 0 150 150">
                            <text>
                              <textPath href="#textPath">how to make your makeup last all day</textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="arrows-style1">
            <button data-slick-prev=".gallery-slider1"><i className="arrow" />Prev</button>
            <button data-slick-next=".gallery-slider1"><i className="arrow" />Next</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CategoryCarousel;
