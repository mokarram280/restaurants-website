import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const ImgCarousel = () => {
    const data = [
        {
          image: "/card1.png",
          
        },
        {
          image: "/card2.png",
          
        },
        {
          image: "/card3.png",
          
        },
        {
          image: "/card4.png",
          
        },
        {
          image: "/card5.png",
          
        },
        {
          image: "/card6.png",
          
        },
        {
          image: "/card7.png",
          
        }
      ];

      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="400px"
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
  );
};

export default ImgCarousel;