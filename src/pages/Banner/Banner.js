import React, { Component } from "react";
import Slider from "react-slick";
import "./Banner.css";
import banner1 from "../../images/1.png";
import banner2 from "../../images/2.png";
import banner3 from "../../images/3.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{}} onClick={onClick}>
      <img
        style={{ width: "40px" }}
        src="https://firebasestorage.googleapis.com/v0/b/rumah-sakit-kita-d1035.appspot.com/o/Arrow%20Website%2FarrowR.png?alt=media&token=2aefcf1c-cd4d-466b-a6c5-73c294aa205e"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{}} onClick={onClick}>
      <img
        style={{ width: "40px" }}
        src="https://firebasestorage.googleapis.com/v0/b/rumah-sakit-kita-d1035.appspot.com/o/Arrow%20Website%2FarrowL.png?alt=media&token=f8bcc094-d06b-4a66-8b20-0bb490314641"
      />
    </div>
  );
}

const photos = [
  {
    id: "1",
    url: banner1,
    css_id: "banner-image-one",
    link: "/",
  },
  {
    id: "2",
    url: banner2,
    css_id: "banner-image-two",
    //  description: 'Dabei sein und (Golf-) spielend Gutes tun!',
    link: "/",
    golflink: "/appointment",
  },
  {
    id: "3",
    url: banner3,
    css_id: "banner-image-three",
    link: "/appointment",
  },
];

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div id="pembungkus">
        <Slider {...settings}>
          {photos.map((photo) => {
            if ((photo.id = 1)) {
              return (
                <div id="homepagebanner-img-container">
                  <img
                    id="homepagebanner-img"
                    width="100%"
                    alt="homepagebanner-image"
                    src={photo.url}
                  />
                  <div className="homepagebanner-text" id={photo.css_id}>
                    <div>
                      <img
                        src={photo.badge}
                        width="100%"
                        position="absolute"
                        className="banner-badge"
                      />
                    </div>
                    <h1>{photo.heading}</h1>
                    <p>{photo.description}</p>
                    <a className="banner-link" href={photo.link}>
                      {photo.link_text}
                    </a>
                  </div>
                </div>
              );
            } else {
              return (
                <div id="homepagebanner-img-container">
                  <img
                    id="homepagebanner-img"
                    width="100%"
                    alt="homepagebanner-image"
                    src={photo.url}
                  />
                  <div className="homepagebanner-text" id={photo.css_id}>
                    <h1>{photo.heading}</h1>
                    <p>{photo.description}</p>
                    <a className="banner-link" href={photo.link}>
                      {photo.link_text}
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default Banner;
