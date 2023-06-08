// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "tailwindcss/tailwind.css";

export default function TopSlider() {
  return (
    <div className="py-10">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-96 bg-blue-200">
            <h2 className="text-3xl font-bold">Summer Sports Camp</h2>
            <p className="text-lg mt-4">Learn and Play Your Favorite Sports</p>
            <img
              src="https://i.ibb.co/kKVGY9v/qZone3.png"
              alt=""
              className="mt-6 w-64 h-64 object-cover rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-96 bg-blue-200">
            <h2 className="text-3xl font-bold">Develop Your Skills</h2>
            <p className="text-lg mt-4">
              Enhance your techniques and abilities in various sports.
            </p>
            <img
              src="https://i.ibb.co/kKVGY9v/qZone3.png"
              alt=""
              className="mt-6 w-64 h-64 object-cover rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-96 bg-blue-200">
            <h2 className="text-3xl font-bold">Experience the Thrill</h2>
            <p className="text-lg mt-4">
              Engage in exciting and competitive sports activities.
            </p>
            <img
              src="https://i.ibb.co/kKVGY9v/qZone3.png"
              alt=""
              className="mt-6 w-64 h-64 object-cover rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-96 bg-blue-200">
            <h2 className="text-3xl font-bold">Build Team Spirit</h2>
            <p className="text-lg mt-4">
              Learn teamwork and collaboration through sportsmanship.
            </p>
            <img
              src="https://i.ibb.co/kKVGY9v/qZone3.png"
              alt=""
              className="mt-6 w-64 h-64 object-cover rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-96 bg-blue-200">
            <h2 className="text-3xl font-bold">Stay Active and Fit</h2>
            <p className="text-lg mt-4">
              Stay healthy and have fun with regular physical activities.
            </p>
            <img
              src="https://i.ibb.co/kKVGY9v/qZone3.png"
              alt=""
              className="mt-6 w-64 h-64 object-cover rounded-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
