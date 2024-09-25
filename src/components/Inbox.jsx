import { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox } from "react-icons/md";
import { Messages } from "./Messages";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const mailType = [
  {
    id: 1,
    icon: <MdInbox size={20} />,
    text: "Primary",
  },
  {
    id: 2,
    icon: <GoTag size={20} />,
    text: "Promotions",
  },
  {
    id: 3,
    icon: <FaUserFriends size={20} />,
    text: "Social",
  },
];

export const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(mailType[0].id);

  return (
    <div className="flex-1 bg-white w-screen h-screen rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-2  cursor-pointer">
            <div className="hover:bg-gray-100">
              <MdCropSquare size={20} />
            </div>
            <div className="hover:bg-gray-100">
              <FaCaretDown size={20} />
            </div>
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 ">
            <IoMdRefresh size={20} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <IoMdMore size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">1-50 of 1000</p>
          <button className="hover:rounded-full bg-gray-100  text-lg">
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 text-lg">
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item) => {
            return (
              <button
                key={item.id}
                className={`flex items-center gap-4 w-52 hover:bg-gray-100 p-4
                ${
                  mailTypeSelected === item.id
                    ? "border-b-4 border-blue-600 text-blue-600"
                    : ""
                }`}
                onClick={() => setMailTypeSelected(item.id)}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>

        <Messages />
      </div>
    </div>
  );
};
