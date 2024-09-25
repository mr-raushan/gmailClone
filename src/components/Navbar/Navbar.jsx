import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <div className="p-4 cursor-pointer rounded-full hover:bg-gray-100">
            <RxHamburgerMenu size={24} />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
              alt="gmail-logo"
              className="w-8"
            />
            <h1 className="text-2xl font-medium text-gray-600">Gmail</h1>
          </div>
        </div>
      </div>

      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch
            size={24}
            className="text-gray-700 cursor-pointer hover:bg-gray-300 rounded-full "
          />
          <input
            type="text"
            placeholder="Search Email..."
            className="rounded-full w-full ml-3 bg-transparent outline-none px-1"
          />
        </div>
      </div>

      <div className="md:block hidden">
        <div className="flex items-center gap-2 mr-5">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={24} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpWYsLSeY1sLvwgFNwBeJGjszUfEofDpwJw&s"
              size="40"
              round={true}
              className="cursor-pointer hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
