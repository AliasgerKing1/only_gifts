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
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {categoryImages.map((cat, index) => (
            <div key={index} className={`carousel-item ${index === categoryCarousel ? 'active' : ''}`}>
              <img src={cat} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryCarousel;
