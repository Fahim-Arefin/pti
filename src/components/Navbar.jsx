import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

function Navbar() {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="xl:mx-16 grid grid-cols-12 text-center py-6">
      <h1 className=" flex items-center justify-center mt-1.5 col-span-3 md:col-span-2 text-3xl md:text-4xl font-extrabold text-[#221314]">
        pti.
      </h1>
      <div className="col-span-5 md:col-span-6 mt-1.5">
        <div className="flex justify-end ">
          <div className="md:w-[80%] relative">
            <LuSearch className="absolute left-2 top-4 text-[#fda174] text-xl" />
            <input
              className="bg-[#fefefe] w-full h-12 p-2.5 md:pl-10 pl-10 rounded-md md:rounded-xl text-sm md:text-lg"
              type="text"
              placeholder="Search Audiobook"
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 flex ml-2">
        <details className="dropdown">
          <summary
            onClick={() => setClicked(!clicked)}
            className="group my-1.5 btn bg-[#fefefe] w-[90px] md:w-[130px] lg:w-[180px] hover:bg-[#fefefe]
             px-2 md:py-2 md:px-4"
          >
            <div className="flex items-center justify-between w-full h-full">
              <div className="text-sm md:text-lg text-[#13283e]">MENU</div>
              {clicked ? (
                <IoIosArrowDown
                  className={`text-[#fda174] text-xl md:text-2xl group-hover:text-[#fda174]`}
                />
              ) : (
                <IoIosArrowUp
                  className={`text-[#fda174] text-xl md:text-2xl group-hover:text-[#fda174]`}
                />
              )}
            </div>
          </summary>
          <ul
            className="shadow dropdown-content z-[1] bg-white rounded-box w-[90px] md:w-[130px] lg:w-[180px] text-left  
          text-sm md:text-[17px] py-4"
          >
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519] ">
              <a>Home</a>
            </li>
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519]">
              <a>Details</a>
            </li>
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519]">
              <a>Category</a>
            </li>
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519]">
              <a>My Favorites</a>
            </li>
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519]">
              <a>Profile</a>
            </li>
            <li className="hover:bg-[#e7e9ec] px-3 md:px-4 py-1 cursor-pointer hover:text-[#fb6519]">
              <a>Log In/Sign Up</a>
            </li>
          </ul>
        </details>
      </div>
      <div className=" hidden md:flex col-span-2  w-full mx-auto mt-2 justify-center">
        <div className=" w-12 h-12 bg-[#fd6011] rounded-full">
          <img
            className="w-full h-full p-2"
            src="https://img.icons8.com/pastel-glyph/64/ffffff/gender-neutral-user.png"
            alt="gender-neutral-user"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
