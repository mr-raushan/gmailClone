import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Message = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/1234");
  };

  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300 ">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300 ">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className=" text-gray-800 font-semibold truncate inline-block max-w-full">
          hello jee, kaise ho sb kya hal chal hai aapke
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">time ayega</div>
    </div>
  );
};
