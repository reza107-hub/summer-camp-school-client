// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

export default function TestimonialsSlider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper p-10"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            background: "#8C9333",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex flex-col space-y-5 justify-center items-center">
            <FaQuoteLeft />
            <div className="subtitle font-raleway" data-swiper-parallax="-200">
              Alice Parker Texas
            </div>
            <div className="text font-serif" data-swiper-parallax="-100">
              <p>
                “My daughter
                has never been this happy during her summer holiday as she was
                this year after spending some great and fun time at your camp! i
                appreciate what you do for the kids and for their parents who
                can participate!”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col space-y-5 justify-center items-center">
            <FaQuoteLeft />
            <div className="subtitle font-raleway" data-swiper-parallax="-200">
              Alice Parker Texas
            </div>
            <div className="text font-serif" data-swiper-parallax="-100">
              <p>
                “My daughter
                has never been this happy during her summer holiday as she was
                this year after spending some great and fun time at your camp! i
                appreciate what you do for the kids and for their parents who
                can participate!”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col space-y-5 justify-center items-center">
            <FaQuoteLeft />
            <div className="subtitle font-raleway" data-swiper-parallax="-200">
              Alice Parker Texas
            </div>
            <div className="text font-serif" data-swiper-parallax="-100">
              <p>
                “My daughter
                has never been this happy during her summer holiday as she was
                this year after spending some great and fun time at your camp! i
                appreciate what you do for the kids and for their parents who
                can participate!”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
