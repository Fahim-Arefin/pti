import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../style.css";
import { Autoplay } from "swiper/modules";

export default function Slider({ data, header, forwarArrowdId, backArrowId }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleNext = () => {
      if (swiper) {
        swiper.slideNext();
      }
    };

    const handlePrev = () => {
      if (swiper) {
        swiper.slidePrev();
      }
    };

    const forwardButton = document.getElementById(forwarArrowdId);
    const backwardButton = document.getElementById(backArrowId);

    if (forwardButton) {
      forwardButton.addEventListener("click", handleNext);
    }

    if (backwardButton) {
      backwardButton.addEventListener("click", handlePrev);
    }

    return () => {
      if (forwardButton) {
        forwardButton.removeEventListener("click", handleNext);
      }

      if (backwardButton) {
        backwardButton.removeEventListener("click", handlePrev);
      }
    };
  }, [backArrowId, forwarArrowdId]);

  return (
    <div className="mt-24 mx-3 lg:my-44 md:mx-10 lg:mx-16 xl:mx-36 xlll:mx-48">
      <div className="flex justify-between text-xl font-bold md:font-medium mb-5 md:pr-5">
        <h1 className="text-[#132131] ">{header}</h1>
        <div className="flex items-center space-x-4 ">
          <div className="text-[#f97d3e] hover:cursor-pointer">AddMore</div>
          <div className="flex ">
            <MdArrowBackIos
              id={backArrowId}
              className="text-[#d6d9dc] hover:cursor-pointer"
            />
            <MdArrowForwardIos
              id={forwarArrowdId}
              className="text-[#495869] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.Id} className={` flex flex-col`}>
            <div className="h-[200px] md:h-[300px] lg:h-[400px] w-full rounded-xl">
              <img
                style={{
                  //   boxShadow: "black 1px 4px 6px",
                  //   boxShadow: "5px 5px 10px -2px black",
                  boxShadow:
                    " rgba(0, 0, 0, 0.16) 0px 0px 0px, black 0px 5px 6px",
                }}
                className="w-full h-full rounded-xl "
                src={item.ImageUrl}
                alt=""
              />
            </div>
            <div className="mt-3 text-[#4d5c6d] font-medium">{item.Name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
