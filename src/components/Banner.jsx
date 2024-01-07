function Banner() {
  // md:mx-10 lg:mx-16 xl:mx-24 xlll:mx-32
  return (
    <div className=" lg:bg-[#f99f1c] mt-6 lg:mt-24 md:mx-10 lg:mx-16 xl:mx-36 xlll:mx-48 rounded-[40px]">
      {/* main div */}
      <div className="grid grid-col-1 lg:grid-cols-12 lg:h-[325px] xlll:h-[405px]">
        {/* headline */}
        <div
          className="text-center font-medium lg:font-normal lg:text-left col-span-1 
        lg:col-span-7 lg:pl-24 xlll:pl-40 lg:pt-24 space-y-4 xlll:space-y-8 "
        >
          <div className=" text-[#11263c] lg:text-[#ffefe7] text-2xl xs:text-3xl lg:text-4xl xl:text-5xl xll:text-6xl xlll:text-7xl">
            <div>
              Deliver Food To Your <span className="lg:hidden">Door</span>
            </div>
            <div>
              <span className="hidden lg:inline">Door</span> Step|
            </div>
          </div>
          <div className="text-[#6b7785] lg:text-[#eeca96] text-sm lg:text-xl xl:text-2xl xlll:text-3xl">
            Authentic Food|,Quick Service,Fast Delivery
          </div>
        </div>
        {/* image */}
        <div
          className="mx-1 md:mx-auto lg:mx-0 h-[221px] col-span-1 lg:col-span-5 bg-[#fd9460] lg:bg-none lg:bg-opacity-0 mt-20 lg:mt-0
        rounded-t-3xl rounded-b-[30px]"
        >
          <img
            className="-mt-20 lg:mt-0 w-full md:w-fit lg:w-fit h-[300px] lg:h-[330px] xlll:h-[410px]"
            src="/Image1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
