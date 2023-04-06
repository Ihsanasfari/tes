import React, { useState } from "react";
import Button from "../components/Button";

import { BsGoogle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import ForgotPassword from "./ForgotPassword";

const LoginModal = ({ Visible, onClose }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleClose = () => setShowForgotPassword(false);
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  if (!Visible) return null;

  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="z-10 fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
      >
        <div className="flex bg-white justify-between items-center px-[96px] py-[72px] rounded-2xl relative">
          <div
            className="w-8 h-8 rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
            onClick={handleOnClose}
            id="closebutton"
          >
            <MdClose className="m-auto" />
          </div>

          <div className="flex flex-col w-[352px] items-center">
            <div className="text-center items-center">
              <h4 className="text-black text-3xl font-semibold  ">Masuk</h4>
            </div>

            <div className="mt-8 w-full">
              <div className="flex flex-col gap-4 items-center text-center justify-center text-white">
                <p className=" text-[#353945]">Masuk dengan akun Google</p>
                <div className="flex w-[130px] items-center text-center justify-center ">
                  <Button>
                    <BsGoogle />
                    <p className="ml-3">Google</p>
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 items-center text-center justify-center ">
                <p className=" text-[#353945]">Atau masuk dengan email</p>

                <div className="flex w-[352px]  items-center text-center justify-center ">
                  <input
                    className="bg-white border rounded-full w-full h-12 px-4"
                    placeholder="Masukan email"
                  />
                </div>
                <div className="flex w-[352px]  items-center text-center justify-center ">
                  <input
                    className="bg-white border rounded-full w-full h-12 px-4"
                    placeholder="Masukan password"
                  />
                </div>
                <div className="flex w-[352px] items-center text-center justify-center ">
                  <Button>Masuk</Button>
                </div>
                <div className="font-bold ">
                  <a
                    className="cursor-pointer"
                    onClick={() => {
                      setShowForgotPassword(true);
                    }}
                  >
                    Lupa password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgotPassword onClose={handleClose} Visible={showForgotPassword} />
    </>
  );
};

export default LoginModal;
