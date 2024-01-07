import { HiArrowRight } from "react-icons/hi2";

function Footer() {
  return (
    <div className="bg-[#f99f1c] mt-44 lg:mt-64 grid grid-cols-10 rounded-b-3xl h-[500px]">
      <div className="col-span-10 lg:col-span-7 px-3 md:px-10 lg:pl-24 xlll:pl-72 pt-20 lg:pt-28">
        {/* input */}
        <div className="w-full lg:w-[90%] xlll:w-[79%] h-14 rounded-md md:rounded-[20px] relative">
          <input
            className="w-full h-full rounded-md md:rounded-[20px] px-8 text-xs lg:text-lg"
            type="text"
            placeholder="Enter Your Email"
          />
          <div
            className="absolute top-2 right-3 h-10 pl-14 pr-6 py-2 w-fit mx-auto lg:bg-[#fc6011] rounded-2xl lg:text-white
            text-[#fc6011] flex space-x-2 items-center"
          >
            <span className="text-sm font-bold lg:font-normal lg:text-lg ">
              Subscribe
            </span>
            <HiArrowRight className="text-2xl " />
          </div>
        </div>
        {/* copyright */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end text-center lg:text-left">
          <div className="lg:mt-32 space-y-12 lg:space-y-4 ml-1 order-2 lg:order-1">
            <div className="text-[#221314] text-4xl font-bold ">
              pti<span className="text-[#fe5b3e]">.</span>
            </div>
            <div className="text-[#301d15] lg:text-[16px] font-bold ml-3">
              copyright<span className="">&copy;</span>Tripp.All Right Reserved
            </div>
          </div>
          {/* icons */}
          <div className="lg:mr-12 xlll:mr-32 flex space-x-2 order-1 lg:order-2 mx-auto lg:mx-0 my-12 lg:my-4 lg:mt-0">
            <div
              className={`w-12 bg-[#fc6011] lg:bg-[#feddba] rounded-full h-12 p-3`}
            >
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/glyph-neue/64/fc6011/google-logo.png"
                alt="google-logo"
                className="hidden lg:flex"
              />
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/glyph-neue/64/ffffff/google-logo.png"
                alt="google-logo"
                className="lg:hidden"
              />
            </div>
            <div
              className={`w-12 bg-[#fc6011] lg:bg-[#feddba] rounded-full h-12 p-3`}
            >
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/ios-glyphs/30/fc6011/twitter--v1.png"
                alt="twitter--v1"
                className="hidden lg:flex"
              />
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"
                alt="twitter--v1"
                className="lg:hidden"
              />
            </div>
            <div
              className={`w-12 bg-[#fc6011] lg:bg-[#feddba] rounded-full h-12 p-3`}
            >
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/windows/32/fc6011/instagram-new.png"
                alt="instagram-new"
                className="hidden lg:flex"
              />
              <img
                width="w-full"
                height="w-full"
                src="https://img.icons8.com/windows/32/ffffff/instagram-new.png"
                alt="instagram-new"
                className="lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex col-span-3  h-[80%] ">
        <img className="h-full" src="/Image2.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
