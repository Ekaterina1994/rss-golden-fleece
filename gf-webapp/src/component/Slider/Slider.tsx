import React from "react";
// import {useRef, useState} from "react";
import styles from "./Slider.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import image1 from "../../resources/SwiperImages/autumn_forest_trees_129892_1920x1080.jpg";
import image2 from "../../resources/SwiperImages/forest_fog_trees_132037_1920x1080.jpg";
import image3 from "../../resources/SwiperImages/landscape_mountains_sun_140434_1920x1080.jpg";
import image4 from "../../resources/SwiperImages/ocean_beach_aerial_view_134429_1920x1080.jpg";
import image5 from "../../resources/SwiperImages/starry_sky_boat_reflection_125803_1920x1080.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";

export function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        navigation={true}
        keyboard={{enabled: true}}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img className={styles.image}
            src={image1}
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image}
            src={image2}
            alt="image2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image}
            src={image3}
            alt="image3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image}
            src={image4}
            alt="image4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image}
            src={image5}
            alt="image5"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
