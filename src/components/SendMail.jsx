import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";

export const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
      >
        <div className="flex items-center  justify-between px-3 py-2 rounded-t-md bg-[#F2F6Fc]">
          <h1>New Message</h1>
          <div
            onClick={() => dispatch(setOpen(false))}
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <RxCross2 size={10} />
          </div>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <input
            value={formData.to}
            name="to"
            type="text"
            placeholder="To"
            className="outline-none p-1"
            onChange={changeHandler}
          />
          <input
            value={formData.subject}
            name="subject"
            type="text"
            placeholder="Subject"
            className="outline-none p-1"
            onChange={changeHandler}
          />
          <textarea
            name="message"
            onChange={changeHandler}
            value={formData.message}
            cols={30}
            rows={10}
            className="outline-none p-1"
          ></textarea>

          <button
            type="submit"
            className="bg-[#0B57D0] w-fit ml-10 hover:bg-blue-500 duration-200 transition-all ease-in-out  rounded-md px-4 py-2 text-white
          font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
