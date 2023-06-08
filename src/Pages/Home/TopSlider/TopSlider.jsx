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
    <div className="">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://i.ibb.co/dPKMZc4/cartoon-children-doing-different-sports-summer-camp-boys-girls-playing-football-tennis-flat-vector-i.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="md:text-5xl text-2xl font-black font-raleway">
                Summer Sports Camp
              </h2>
              <p className="md:text-lg mt-4 font-sans">
                Learn and Play Your Favorite Sports
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://ymcagbw.org/sites/default/files/2019-01/Summer-Camp---Kids-playing-soccer-at-sports-camp.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="md:text-5xl text-2xl font-black font-raleway">
                Experience the Thrill
              </h2>
              <p className="md:text-lg mt-4 font-sans">
                Engage in exciting and competitive sports activities.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://img.freepik.com/free-vector/new-normal-summer-camps_23-2148596071.jpg?w=1060&t=st=1686188582~exp=1686189182~hmac=b2debd3067a9f4077a4ffecac2a522316fc9588f9cbf117b1761b82b559c2af6"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="md:text-5xl text-2xl font-black font-raleway">
                Develop Your Skills
              </h2>
              <p className="md:text-lg mt-4 font-sans">
                Enhance your techniques and abilities in various sports.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://media.istockphoto.com/id/583853850/photo/family-playing-tennis-holding-rackets-and-ball.jpg?s=612x612&w=0&k=20&c=5G5MrMdJbw2J6BVsiGvQlaoUHPy0gY70Mlz67KUlmOE="
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="md:text-5xl text-2xl font-black font-raleway">
                Build Team Spirit
              </h2>
              <p className="md:text-lg mt-4 font-sans">
                Learn teamwork and collaboration through sportsmanship.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://static01.nyt.com/images/2020/06/21/multimedia/21ah-pools/21ah-pools-superJumbo.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h2 className="md:text-5xl text-2xl font-black font-raleway">
                Stay Active and Fit
              </h2>
              <p className="md:text-lg mt-4 font-sans">
                Stay healthy and have fun with regular physical activities.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides with the same structure */}
      </Swiper>
    </div>
  );
}
