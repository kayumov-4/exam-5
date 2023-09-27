import React, { useContext } from "react";
import SectionHeadings from "../UI/SectionHeadings";
import CommentsCard from "../UI/CommentsCard";
import { ThemeContext } from "../../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../../db";
import "./style.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section
      id="testimonials"
      className={`bg-[#F9FAFB] ${theme == "dark" && "!bg-[#111827]"}`}
    >
      <div className="container">
        <div className="flex justify-center mb-4">
          <SectionHeadings title="Testimonials" />
        </div>
        <h2
          className={`text-[#4B5563] text-center ${
            theme == "dark" && "!text-white"
          }`}
        >
          Nice things people have said about me:
        </h2>
        <div className="testimonials_wrapper flex items-center flex-wrap justify-center">
          {data.testimonials.slice(0, 3).map((comment) => {
            return <CommentsCard state={comment} />;
          })}
        </div>
        {/* <div className="mobile_slider hidden">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              720: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper pb-10 flex items-center justify-center"
          >
            {data.testimonials.map((comment) => {
              return (
                <SwiperSlide className="w-full slide">
                  <CommentsCard state={comment} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
};

export default index;
