import React from "react";
import Button from "../components/Button";

import { BsGoogle } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const RegisterModal = ({ Visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  if (!Visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-10 fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      <div className="flex bg-white justify-between items-center px-[120px] py-[72px] rounded-2xl relative">
        <div
          className="w-8 h-8 rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          onClick={handleOnClose}
          id="closebutton"
        >
          <MdClose className="m-auto" />
        </div>

        <div className="flex flex-col w-[352px] items-center">
          <div className="text-center items-center">
            <h4 className="text-black text-3xl font-semibold">Daftar</h4>
          </div>

          <div className="mt-8 w-full">
            <div className="flex flex-col gap-4 items-center text-center justify-center text-white">
              <p className=" text-[#353945]">Masuk dengan akun </p>
              <div className="flex w-[130px] items-center text-center justify-center gap-3 ">
                <button className="flex w-full px-6 py-4 bg-[#3B71FE] rounded-full text-white font-medium items-center text-center justify-center">
                  <BsGoogle />
                  <p className="ml-3">Google</p>
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 items-center text-center justify-center ">
              <p className=" text-[#353945]">Atau masuk dengan email</p>
              <div className="flex gap-3 text-center">
                <div className="flex w-[186px]  items-center text-center justify-center ">
                  <input
                    className="bg-white border rounded-full w-full h-12 px-4"
                    placeholder="Masukan nama"
                  />
                </div>
                <div className="flex  w-[151px]  items-center text-center justify-center ">
                  <input
                    className="bg-white border rounded-full w-full h-12 px-4"
                    placeholder="No hp"
                  />
                </div>
              </div>
              <div className="flex w-[352px]  items-center text-center justify-center ">
                <input
                  className="bg-white border rounded-full w-full h-12 px-4"
                  placeholder="Masukan email kamu"
                />
              </div>

              <div className="flex w-[352px] items-center text-center justify-center ">
                <Button>Daftar</Button>
              </div>
              <div className="flex">
                <p>Sudah punya akun? </p> &nbsp;
                <a className="text-[#3B71FE] cursor-pointer">Masuk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
