import { LuPencil } from "react-icons/lu";
import { HiInbox } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SidebarItems = [
  {
    id: 1,
    icons: <HiInbox size={20} />,
    text: "Inbox",
  },
  {
    idL: 2,
    icons: <CiStar size={20} />,
    text: "Starred",
  },
  {
    id: 3,
    icons: <MdOutlineWatchLater size={20} />,
    text: "Snoozed",
  },
  {
    id: 4,
    icons: <IoMdSend size={20} />,
    text: "Sent",
  },
  {
    id: 5,
    icons: <IoIosArrowDown size={20} />,
    text: "More",
  },
];

export const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="bg-[#C2E7FF] flex items-center gap-2 hover:shadow-md rounded-2xl p-4">
          <LuPencil size={24} />
          Compose
        </button>
      </div>
      <div className="flex flex-col ">
        <div>
          {SidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 hover:bg-[#D3E3FD] rounded-r-full cursor-pointer duration-200 transition-all ease-in-out pl-6 py-1 my-2"
            >
              {item.icons}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
