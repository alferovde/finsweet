"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./testimonials.module.scss";
import avatar from "../../../../public/images/userAvatar.png";
import Image from "next/image";
import "./testi_slider.scss";
import nextArrow from "../../../../public/images/ArrowRight.png";

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);
  function SampleNextArrow() {
    return (
      <div
        className={style.next_btn}
        onClick={() => sliderRef.current?.slickNext()}
      >
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2852 9C21.8374 9 22.2852 8.55228 22.2852 8C22.2852 7.44772 21.8374 7 21.2852 7L21.2852 9ZM0.449017 7.29289C0.0584927 7.68342 0.0584926 8.31658 0.449017 8.7071L6.81298 15.0711C7.2035 15.4616 7.83667 15.4616 8.22719 15.0711C8.61772 14.6805 8.61772 14.0474 8.22719 13.6569L2.57034 8L8.22719 2.34314C8.61772 1.95262 8.61772 1.31946 8.22719 0.928931C7.83667 0.538407 7.2035 0.538407 6.81298 0.928931L0.449017 7.29289ZM21.2852 7L1.15612 7L1.15612 9L21.2852 9L21.2852 7Z"
            fill="#232536"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow() {
    return (
      <div
        className={style.prev_btn}
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2852 9C21.8374 9 22.2852 8.55228 22.2852 8C22.2852 7.44772 21.8374 7 21.2852 7L21.2852 9ZM0.449017 7.29289C0.0584927 7.68342 0.0584926 8.31658 0.449017 8.7071L6.81298 15.0711C7.2035 15.4616 7.83667 15.4616 8.22719 15.0711C8.61772 14.6805 8.61772 14.0474 8.22719 13.6569L2.57034 8L8.22719 2.34314C8.61772 1.95262 8.61772 1.31946 8.22719 0.928931C7.83667 0.538407 7.2035 0.538407 6.81298 0.928931L0.449017 7.29289ZM21.2852 7L1.15612 7L1.15612 9L21.2852 9L21.2852 7Z"
            fill="#232536"
          />
        </svg>
      </div>
    );
  }

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    className: style.mainslider,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={`${style.testimonials__wrapper} container`}>
      <div className={style.testimonials__info}>
        <div className={style.testimonials__info__container}>
          <span>TESTIMONIALS</span>
          <h2>What people say about our blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className={style.testimonials__slider}>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className={style.slider__content}>
              <Image src={avatar} alt="user avatar" />
              <div className={style.slider__content__profile}>
                <p>Jonathan Vallem</p>
                <span>New york, USA</span>
              </div>
            </div>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <div className={style.slider__content}>
              <Image src={avatar} alt="user avatar" />
              <div className={style.slider__content__profile}>
                <p>Jonathan Vallem</p>
                <span>New york, USA</span>
              </div>
            </div>
          </div>
          <div>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className={style.slider__content}>
              <Image src={avatar} alt="user avatar" />
              <div className={style.slider__content__profile}>
                <p>Jonathan Vallem</p>
                <span>New york, USA</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
