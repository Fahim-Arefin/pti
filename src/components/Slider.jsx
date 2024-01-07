import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../style.css";
import { Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import DataNotFound from "./DataNotFound";

export default function Slider({
  data,
  header,
  forwarArrowdId,
  backArrowId,
  className,
  modalRef,
  handleAddItem,
}) {
  const swiperRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const handleAdd = () => {
    modalRef.current.showModal();
    console.log(modalRef.current);
  };

  const onSubmit = (formData) => {
    // console.log(formData);
    let data;
    if (!formData.isPopular) {
      let rec = formData.isRecommended === "true" ? true : false;
      data = {
        Id: uuidv4(),
        ImageUrl: formData.imageUrl,
        IsPopular: true,
        IsRecommended: rec,
        Name: formData.name,
        Price: parseFloat(formData.price),
      };
    } else {
      let pop = formData.isPopular === "true" ? true : false;
      data = {
        Id: uuidv4(),
        ImageUrl: formData.imageUrl,
        IsPopular: pop,
        IsRecommended: true,
        Name: formData.name,
        Price: parseFloat(formData.price),
      };
    }
    // console.log(data);
    modalRef.current.close();
    reset();
    handleAddItem(data);
  };

  return (
    <div className={`mx-3 md:mx-10 lg:mx-16 xl:mx-36 xlll:mx-48 ${className}`}>
      <div className="flex justify-between text-sm md:text-xl font-bold md:font-medium mb-3 md:mb-5 md:pr-5">
        <h1 className="text-[#132131] ">{header}</h1>
        <div className="flex items-center space-x-4 ">
          <div
            onClick={handleAdd}
            className="text-[#f97d3e] hover:cursor-pointer"
          >
            AddMore
          </div>
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
        {data.length === 0 && <DataNotFound />}
        {data.length > 0 &&
          data.map((item) => (
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
                  alt={item.Name}
                />
              </div>
              <div className="mt-3 text-[#4d5c6d] text-sm md:text-xl font-medium">
                {item.Name}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* image */}
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-600"
              >
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("imageUrl", {
                  required: true,
                })}
              />
              {errors?.imageUrl?.type === "required" && (
                <div className="flex space-x-2 items-center mt-2">
                  <div className="w-5 h-5">
                    <img
                      className="h-full w-full"
                      src="https://img.icons8.com/pastel-glyph/64/FA5252/error--v2.png"
                      alt="error--v2"
                    />
                  </div>
                  <p className="text-[#FA5252] mt-1 text-sm ">
                    imageUrl is required
                  </p>
                </div>
              )}
            </div>
            {/* popular */}
            <div className="mb-4">
              <label
                htmlFor="isPopular"
                className="block text-sm font-medium text-gray-600"
              >
                Is Popular
              </label>
              <select
                id="isPopular"
                name="isPopular"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                disabled={header === "Popular"}
                {...register("isPopular")}
                required
              >
                <option value="">Select a value</option>
                <option selected={header === "Popular"} value="true">
                  True
                </option>
                <option value="false">False</option>
              </select>
            </div>
            {/* recommended */}
            <div className="mb-4">
              <label
                htmlFor="isRecommended"
                className="block text-sm font-medium text-gray-600"
              >
                Is Recommended
              </label>
              <select
                id="isRecommended"
                name="isRecommended"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                disabled={header === "Recommended"}
                {...register("isRecommended")}
                required
              >
                <option value="">Select a value</option>
                <option selected={header === "Recommended"} value="true">
                  True
                </option>
                <option value="false">False</option>
              </select>
            </div>
            {/* name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("name", {
                  required: true,
                })}
              />
              {errors?.name?.type === "required" && (
                <div className="flex space-x-2 items-center mt-2">
                  <div className="w-5 h-5">
                    <img
                      className="h-full w-full"
                      src="https://img.icons8.com/pastel-glyph/64/FA5252/error--v2.png"
                      alt="error--v2"
                    />
                  </div>
                  <p className="text-[#FA5252] mt-1 text-sm ">
                    name is required
                  </p>
                </div>
              )}
            </div>
            {/* price */}
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                {...register("price", {
                  required: true,
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/, // Allow positive float numbers with up to 2 decimal places
                    message:
                      "Only allows positive float numbers with up to 2 decimal places ",
                  },
                })}
              />
              {errors?.price?.type === "required" && (
                <div className="flex space-x-2 items-center mt-2">
                  <div className="w-5 h-5">
                    <img
                      className="h-full w-full"
                      src="https://img.icons8.com/pastel-glyph/64/FA5252/error--v2.png"
                      alt="error--v2"
                    />
                  </div>
                  <p className="text-[#FA5252] mt-1 text-sm ">
                    Price is required
                  </p>
                </div>
              )}
              {errors?.price?.type === "pattern" && (
                <div className="flex space-x-2 items-center mt-2">
                  <div className="w-5 h-5">
                    <img
                      className="h-full w-full"
                      src="https://img.icons8.com/pastel-glyph/64/FA5252/error--v2.png"
                      alt="error--v2"
                    />
                  </div>
                  <p className="text-[#FA5252] mt-1 text-sm ">
                    {errors.price.message}
                  </p>
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
