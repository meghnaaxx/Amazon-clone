import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselItems = [
  {
    id: 1,
    image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    caption:"image 1",
    
    id: 2,
    image: "https://illustoon.com/photo/dl/872.png",
    caption: 'Image 2',
  },
  {
    id: 3,
    image: "https://illustoon.com/photo/dl/872.png",
    caption: 'Image 3',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  
  );
};

export default Carousel;
