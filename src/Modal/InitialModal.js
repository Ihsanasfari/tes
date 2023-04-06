import React, { useState } from "react";
import Button from "../components/Button";

import { MdClose } from "react-icons/md";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const InitialModal = ({ Visible, onClose }) => {
  const [showModalMasuk, setShowModalMasuk] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const handleClose = () =>
    setShowModalMasuk(false) || setShowModalRegister(false);
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  if (!Visible) return null;
  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="z-10 fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center
            "
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
            <h4 className="text-black text-3xl text-center items-center ">
              Selamat datang di <br />
              Tekos
            </h4>
            <div className="mt-8 w-full">
              <div className="flex flex-col">
                <p> Sudah punya akun?</p>
                <div className="mt-2">
                  <div
                    onClick={() => {
                      setShowModalMasuk(true);
                    }}
                    id="closebutton"
                  >
                    <Button> Masuk</Button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p>Belum Punya akun?</p>
                <div className="mt-2">
                  <div onClick={() => setShowModalRegister(true)}>
                    <Button>Daftar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginModal onClose={handleClose} Visible={showModalMasuk} />

      <RegisterModal onClose={handleClose} Visible={showModalRegister} />
    </>
  );
};

export default InitialModal;
